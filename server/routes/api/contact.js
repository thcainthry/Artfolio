const express = require('express');
const router = express.Router();

const Contact = require('../../src/models/NaKontakto');
const mailgun = require() // mailgun import when created


router.post('/add',async (req,res) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        if(!email){
            return res
            .status(400)
            .json({error:'Please enter your email'});
        }
        if(!name){
            return res
            .status(400)
            .json({error:'Please enter your name'});
        }
        if(!message){
            return res
            .status(400)
            .json({error:'Please enter your message'});
        }

        const existingContact = await Contact.findOne({email});

        if(existingContact){
            return res
            .status(400)
            .json({error:'A request already exists'});
        }

        const contact = new Contact({
            name,
            email,
            message
        });

        const contactDoc = await contact.save();

        await mailgun.sendEmail(email,'contact');

        res.status(200).json({
            success:true,
            message:'Your request has been sent, we will contact you soon.',
            contact:contactDoc
        });
    }catch(error){
        return res.status(400).json({
            error:'Your request could not be processed. Please try again.'});
    }
});

module.exports = router;