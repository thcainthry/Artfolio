const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const Porosit = require('../../src/models/') //duhet me u kriju Porosite.js tek models
const Cart = require('../../src/models/') //duhet me u kriju Cart.js tek models
const Paintings = require('../../src/models/Paintings')
const auth = require('../../middleware/') //duhet me u kriju auth.js tek middleware
const mailgun = require('../../services/mailgun')  //ka me u ba push nga eriona
const store = require('../../services/store') //duhet me u kriju store.js tek services

const {ROLES, CART_ITEM_STATUS} = require('../../src/constants');

router.post('/add',auth,async(req,res)=>{
    try{
        const cart = req.body.cart;
        const total = req.body.total;
        const user = req.user._id;
    
        const order = new Order({
            cart,
            user,
            total
        });

        const orderDoc = await order.save();

        const cartDoc = await Cart.findById(orderDoc.cart._id)
        .populate({
            path: 'paintings.painting',
            populate: {
                path: 'brand'
            }
        });
    
        const newOrders = {
            _id: orderDoc._id,
            created: orderDoc.created,
            user: orderDoc.user,
            total: orderDoc.total,
            paintings: cartDoc.paintings
        };

        await mailgun.sendEmail(
            order.user.email,
            'order-confirmation',
            newOrders
        );

        res.status(200).json({
            success: true,
            message: "Porosia u shtua me sukses",
            order:{_id:orderDoc._id}
        });
    }catch(error){
        res.status(400).json({
            error:"Your request could not be processed. Please try again."
        });
    }
});

router.get('/search',auth,async(req,res)=>{
    try{
        const {search} = req.query;

        if(!mysql.Types.ObjectId.isValid(search)){
            return res.status(200).json({
                orders: []
            });
        }

        let ordersDoc = nulll;
        if(req.user.role === ROLES.Admin){
            ordersDoc = await Order.find({
                _id: mysql.Types.ObjectId(search)
            }).populate({
                path: 'cart',
                populate: {
                    path: 'paintings.painting',
                    populate: {
                        path: 'brand'
                    }
                }
            });
        }else{
            const user = req.user._id;
            ordersDoc = await Order.find({
                _id: mysql.Types.ObjectId(search),
                user
            }).populate({
                path: 'cart',
                populate: {
                    path: 'paintings.painting',
                    populate: {
                        path: 'brand'
                    }
                }
            });
        }

        ordersDoc = ordersDoc.filter(order => order.cart);

        if(ordersDoc.length > 0){
            const newOrders = ordersDoc.map(o => {
                return{
                    _id: o._id,
                    total: parseFloat(Number(o.total).toFixed(2)),
                    created: o.created,
                    paintings: o.cart.paintings
                };
            });

        orders.sort((a,b) => b.created - a.created);
        res.status(200).json({
            orders
        });
    }else{
        res.status(200).json({
            orders: []
        });
    }
    }catch(error){
        res.status(400).json({
            error:"Your request could not be processed. Please try again."
        });
    }
});

router.get('/:orderId',auth,async(req,res)=>{
    try{
        const orderId = req.params.orderId;
        let orderDoc = null;

        if(req.user.role === ROLES.Admin){
            orderDoc = await Order.findOne({_id:orderId})
            .populate({
                path: 'cart',
                populate: {
                    path: 'paintings.painting',
                    populate: {
                        path: 'brand'
                    }
                }
            });
    }else{
        const user = req.user._id;
        orderDoc = await Order.findOne({_id:orderId,user})
        .populate({
            path: 'cart',
            populate: {
                path: 'paintings.painting',
                populate: {
                    path: 'brand'
                }
            }
        });
    }

    if(!orderDoc || !orderDoc.cart){
        return res.status(400).json({
            message: "Porosia nuk u gjet"
        });
    }

    let order = {
        _id: orderDoc._id,
        total:orderDoc.total,
        created: orderDoc.created,
        paintings: orderDoc?.cart?.paintings,
        cartId: orderDoc.cart._id
    };

    res.status(200).json({
        order
    });
    }catch(error){
        res.status(400).json({
            error:"Your request could not be processed. Please try again."
        });
    }
});

router.delete('/cancel/:orderId',auth,async(req,res)=>{
    try{
        const orderId = req.params.orderId;

        const order = await Order.findOne({_id:orderId});
        const foundCart = await Cart.findOne({_id:order.cart});

        increaseQuantity(foundCart.paintings);

        await Order.deleteOne({_id:orderId});
        await Cart.deleteOne({_id:order.cart});

        res.status(200).json({
            success: true,
    });
    }catch(error){
        res.status(400).json({
            error:"Your request could not be processed. Please try again."
        });
    }
});

router.put('/status/item/:itemId',auth,async(req,res)=>{
    try{
        const itemId = req.params.itemId;
        const orderId = req.body.orderId;
        const cartId = req.body.cartId;
        const status = req.body.status || CART_ITEM_STATUS.Cancelled;

        const foundCart = await Cart.findOne({'products._id':itemId});
        const foundCartProduct = foundCart.paintings.find(p => p._id == itemId);

        await Cart.updateOne(
            {
                'products._id':itemId
            },
            {
                'products.$.status': status
            }
        );

        if(status === CART_ITEM_STATUS.Cancelled){
            await foundCartProduct.updateOne(
                {_id: foundCartProduct.paintings},
                {$inc:{quantity:foundCartProduct.quantity}}
            );

            const cart = await Cart.findOne({_id:cartId});
            const items = cart.paintings.filter(
                item => item.status === CART_ITEM_STATUS.Cancelled);

                if(cart.paintings.length === items.length){
                    await Order.deleteOne({_id:orderId});
                    await Cart.deleteOne({_id:cartId});
                
                return res.status(200).json({
                    success: true,
                    orderCancelled: true,
                    message:`${
                        req.user.role === ROLES.Admin ? 'Order' : 'Your order'
                    } has been cancelled successfully.`
                });
            }

            return res.status(200).json({
                success: true,
                message: "Item has been cancelled successfully."
            });
        }

        res.status(200).json({
            success: true,
            message: "Item status has been updated successfully."
        });
    }catch(error){
        res.status(400).json({
            error:"Your request could not be processed. Please try again."
        });
    }
});

const increaseQuantity= paintings => {
    let bulkOptions = paintings.map(item => {
        return{
            updateOne:{
                filter: {_id: item.painting},
                update: {$inc:{quantity: item.quantity}}
            }
        };
    });

    Paintings.bulkWrite(bulkOptions);
};

module.exports = router;

    