const express = require('express');
const router = express.Router();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const passport = require('passport');

const auth = require('../../middleware/auth');

const User = require('../../models/user');
const mailchimp = require('../../services/mailchimp');
const mailgun = require('../../services/mailgun');
const keys = require('../../config/keys');
const {EMAIL_PROVIDER} = require('../../constants');
const { stat } = require('fs');

const {secret, tokenLife} = keys.jwt;

router.post('/login',async(req,res)=>{
    try{
        const {
            email,password
        } = req.body;

        if(!email){
            return res.status(400).json({error:'Email is required'});
        }

        if(!password){
            return res.status(400).json({error:'Password is required'});
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({error:'User not found'});
        }   

        if(user && user.provider !==EMAIL_PROVIDER.Email){
            return res.status(400).send ({
                error: `The email address is already in use using ${user.provider}`
            });
        }

        const isMatch = await bycrypt.compare(password,user.password);

        if(!isMatch){
            return res.status(400).json({
                success:false,
                error:'Password Incorrect'
            });
        }

        const payload = {
            id:user.id
        };

        const token = jwt.sign(payload,secret,{expiresIn:tokenLife});

        if(!token){
          throw new Error();
        }

        res.status(200).json({
            success:true,
            token:`Bearer ${token}`,
            user:{
                id:user.id,
                firstName:user.firstName,
                lastName:user.lastName,
                email:user.email,
                role: user.role
            }
        });
    }catch (error){
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
});

router.post('/register',async(req,res)=>{
        try{
            const {email,password,firstName,lastName} = req.body;

            if(!email){
                return res.status(400).json({error:'Email is required'});
            }

            if(!password){
                return res.status(400).json({error:'Password is required'});
            }

            const existingUser = await User.findOne({email});

            if(existingUser){
                return res
                .status(400)
                .json({
                    error:'Account with this email already exists.'
                });
            }

            const user = new User({
                email,
                password,   
                firstName,
                lastName
            });

            const salt = await bycrypt.genSalt(10);
            const hash = await bycrypt.hash(user.password,salt);

            user.password = hash;
            const registeredUser = await user.save();

            const payload = {
                id: registeredUser.id
            };

            await mailgun.sendEmail(
                registeredUser.email,
                'signup',
                null,
                registeredUser
            );

            const token = jwt.sign(payload,secret,{expiresIn:tokenLife});
            
            res.status(200).json({
                success: true,
                subscribed,
                token: `Bearer ${token}`,
                user:{
                    id:registeredUser.id,
                    firstName:registeredUser.firstName,
                    lastName:registeredUser.lastName,
                    email:registeredUser.email,
                    role:registeredUser.role
                }
            });
        }catch(error){
            res.status(400).json({
                error: 'Your request could not be processed. Please try again.'
            });
        }
});

router.post('/forgot-password',async(req,res)=>{
        try{
            const {email} = req.body;

            if(!email){
                return res
                .status(400)
                .json({error:'Email is required'});
            }

            const existingUser = await User.findOne({email});

            if(!existingUser){
                return res
                .status(400)
                .json({error:'Account with this email does not exist.'});
            }

            const buffer = await crypto.randomBytes(48);
            const resetToken = buffer.toString('hex');

            existingUser.resetPasswordToken = resetToken;
            existingUser.resetPasswordExpires = Date.now() + 3600000;

            existingUser.save();
            
            await mailgun.sendEmail(
                existingUser.email,
                'reset',
                req.headers.host,
                resetToken
            );

            res.status(200).json({
                success:true,
                message:'Please check your email for the link to reset your password.'
            });
            }catch (error){
                res.status(400).json({
                    error: 'Your request could not be processed. Please try again.'
                });
            }
});

router.post('/reset/:token',async(req,res)=>{
    try{
        const {password} = req.body;

        if(!password){
            return res
            .status(400)
            .json({error:'Password is required'});
        }

        const resetUser = await User.findOne({
            resetPasswordToken:req.params.token,
            resetPasswordExpires:{$gt:Date.now()}
        });

        if(!resetUser){
            return res
            .status(400)
            .json({error:'Password reset token is invalid or has expired.'});
        }

        const salt = await bycrypt.genSalt(10);
        const hash = await bycrypt.hash(password,salt);

        resetUser.password = hash;
        resetUser.resetPasswordToken = undefined;
        resetUser.resetPasswordExpires = undefined;

        resetUser.save();

        await mailgun.sendEmail(resetUser.email,'reset-confirmation');

        res.status(200).json({
            success:true,
            message:'Password changed successfully. Please login with your new password.'
    });
    }catch (error){
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
});
