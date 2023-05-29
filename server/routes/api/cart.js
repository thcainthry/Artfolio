const express = require('express');
const router = express.Router();

const Cart = require('');//shtohet pasi te bahen modelet perkatese
const Paintings = require('../../src/models/Paintings');
const store = require('') //shtohet pastaj utils

router.post('/add', auth, async (req, res) => {
    try{
        const user = req.user.id;
        const paintings = req.body.paintings;

        const cart = new Cart({
            user,
            paintings
        });

        const cartDoc = await cart.save();
        decreaseQuantity(paintings);

        res.status(200).json({
            success: true,
            cartId: cartDoc._id,
    });
    }catch(error){
        res.status(400).json({
            error:"Your request could not be processed. Please try again."
        });
    }
});

router.delete('/delete/:cartId', auth, async (req, res) => {
    try{
        await Cart.deleteOne({
            _id: req.params.cartId
        });

        req.status(200).json({
            success: true,
        });
    }catch(error){
        res.status(400).json({
            error: "Your request could not be processed. Please try again."
        });
    }
});

router.post('/add/:cartId', auth, async (req, res) => {
    try{
        const paintings = req.body.paintings;
        const query = {_id: req.params.cartId};

        await Cart.updateOne(query, {
            $push: { paintings: paintings }
        }).exec();

        res.status(200).json({
            success: true,
        });
    }catch(error){
        res.status(400).json({
            error: "Your request could not be processed. Please try again."
        });
    }
});

router.delete('/delete/:cartId/:paintingsId', auth, async (req, res) => {
    try{
        const paintings = {paintings: req.params.paintingsId};
        const query = {_id: req.params.cartId};

        await Cart.updateOne(query, {
            $pull: {paintings:paintings}
        }).exec();

        res.status(200).json({
            success: true,
        });
    }catch(error){
        res.status(400).json({
            error: "Your request could not be processed. Please try again."
        });
    }
});

const decreaseQuantity = paintings => {
    let bulkOptions = paintings.map(item => {
        return {
            updateOne: {
                filter:{_id: item.paintings},
                update: {$inc: {quantity: -item.quantity}}
            }
        };
    });
    Paintings.bulkWrite(bulkOptions);
};

module.exports = router;
