const express = require('express')
const router = express.Router();
const multer = require('multer')
const mysql = require('mysql')

const Paintings = require('../../src/models/Paintings')
const Koleksionet = require('../../src/models/Koleksionet')
const auth = require('') // auth middleware pastaj shtohet
const role = require('') // role middleware pastaj shtohet

const checkAuth = require('../../') //shtohet pasi te shtohen utilis

const {ROLES} = require('../../constants')

router.get('/item/:slug', async(req, res) => {
   try{
    const slug = req.params.slug;
    const paintingsDoc = await Paintings.findOne({slug, isActive:true})
    .populate(
        {
            path:'koleksioni',
            select: 'name isActive slug' 
        }
    );
    
    const hasNoKoleksion = paintingsDoc?.koleksioni === null || paintingsDoc?.koleksioni?.isActive === false;
   
    if(!paintingsDoc || hasNoKoleksion){
        return res.status(404).json({
            error: 'The requested painting was not found.'
        });
    }

    
    res.status(200).json({
        painting: paintingsDoc
    });
    
}catch(error){
    res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
    });
}
});

