const express = require('express');
const router = express.Router();

const Address = require('../../models/Address');
const auth = require('../../middleware/auth');

router.post(`/add`,auth,async(req,res)=>{
    try{
        const user = req.user;

        const address = new Address({
            ...req.body,
            user: user._id
        });

        const addressDoc = await address.save();

        res.status(200).json({
                success:true,
                message: `Address added successfully`,
                address: addressDoc
        });
    }catch(err){
        res.status(400).json({
            error:'Your request could not be processed. Please try again.'
        });
    }
});

router.get('/',auth,async(req,res)=>{
    try{
        const addresses = await Address.find({user:req.user._id});
        res.status(200).json({
            addresses
        });
    }catch(err){
        res.status(400).json({
            error:'Your request could not be processed. Please try again.'
        });
    }
});


router.get('/:id',auth,async(req,res)=>{
        try{
            const addressID = req.params.id;
            const addressDoc = await Address.findOne({_id:addressID});

            if(!addressDoc){
                res.status(404).json({
                    message:`Cannot find Address with the id: ${addressID}`
                });
            }

            res.status(200).json({
                address:addressDoc
            });
        }catch(err){
            res.status(400).json({
                error:'Your request could not be processed. Please try again.'
            });
        }
});

router.put('/:id',auth,async(req,res)=>{
    try{
        const addressID = req.params.id;
        const update = req.body;
        const query = {_id:addressID};

        await Address.findOneAndUpdate(query,update,{
            new:true
        });

        res.status(200).json({
            success:true,
            message:'Address has been updated successfully!'
        });
    }catch(err){
        res.status(400).json({
            error:'Your request could not be processed. Please try again.'
        });
    }
});

router.delete('/delete/:id', async(req,res)=>{

    try{
        const address = await Address.findOneAndDelete({_id:req.params.id});
        res.status(200).json({
            success:true,
            message:'Address has been deleted successfully!'
        });
    }catch(err){
        res.status(400).json({
            error:'Your request could not be processed. Please try again.'
        });
    }
});

module.exports = router;