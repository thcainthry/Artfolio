const express = require('express')
const router = express.Router();
const multer = require('multer')
const mysql = require('mysql')

const Paintings = require('../../src/models/Paintings')
const Koleksionet = require('../../src/models/Koleksionet')
const auth = require('') // auth middleware pastaj shtohet
const role = require('') // role middleware pastaj shtohet

const checkAuth = require('../../') //shtohet pasi te shtohen utilis

const {ROLES} = require('../../constants');
const path = require('path');

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

router.post(
    '/add',
    role.check(ROLES.Admin),
    upload.single('image'),
    async (req, res) => {
        try{
            const emri_piktures = req.body.emri_piktures
            const pershkrimi_piktures = req.body.pershkrimi_piktures
            const cimimi_piktures = req.body.cimimi_piktures
            const koleksioni_piktures = req.body.koleksioni_piktures
            const dimensionet = req.body.dimensionet
        
    
        if(!emri_piktures){
            return res.status(400).json({
                error: 'You must enter a name.'
            });
        }

        if(!pershkrimi_piktures){
            return res.status(400).json({
                error: 'You must enter a description.'
            });
        }

        if(!cimimi_piktures){
            return res.status(400).json({
                error: 'You must enter a price.'
            });
        }

        if(!koleksioni_piktures){
            return res.status(400).json({
                error: 'You must enter a collection.'
            });
        }

        if(!dimensionet){
            return res.status(400).json({
                error: 'You must enter dimensions.'
            });
        }

        const paintings = new Paintings({
            emri_piktures,
            pershkrimi_piktures,
            cimimi_piktures,
            koleksioni_piktures,
            dimensionet
        });

        const savedPainting = await product.save();

        res.status(200).json({
            success:true,
            message: 'Product has been added successfully!',
            product: savedPainting
        });
    }catch(error){
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
    });

    router.get(
        '/',
        auth,
        role.check(ROLES.Admin),
        async (req, res) => {
            try{
                let paintings = [];

                if(req.user.Admin){
                    paintings = await Paintings.find({
                        Admin: req.user.Admin
                    })
                    .populate(
                        'Admin','_id'
                    );

                    const koleksioniId = koleksioni[0]?.['_id'];

                    paintings = await Paintings.find({})
                    .populate({
                        path: 'koleksioni',
                        populate:{
                            path: 'Admin',
                            model: 'Admin'
                        }
                    })
                        .where('koleksioni', koleksioniId);
            }else{
                paintings = await Paintings.find({})
                .populate({
                    path: 'koleksioni',
                    populate:{
                        path: 'Admin',
                        model: 'Admin'
                    }
                });
            }
            res.status(200).json({
                paintings
            });
        }catch(error){
            res.status(400).json({
                error: 'Your request could not be processed. Please try again.'
            });
        }
        });

router.get(
    '/:id',
    auth,
    role.check(ROLES.Admin),
    async (req, res) => {
        try{
        const paintingsId = req.params.id
        let paintingsDoc = null;

        if(req.user.Admin){
            const paintings = await Paintings.find({
                Admin: req.user.Admin
            }).populate('Admin','_id');

            const paintingsId = paintings[0]?.['_id'];

            paintingsDoc = await Paintings.findOne({_id: paintingsId})
            .populate({
                path: 'koleksioni',
                select: 'name'
            })
            .where('koleksioni',koleksioniId);
        }else{
            paintingsDoc = await Paintings.findOne({_id: paintingsId})
            .populate({
                path: 'koleksioni',
                select: 'name'
            });
        }

        if(!productDoc){
            return res.status(404).json({
                error: 'The requested painting was not found.'
            });
        }

        req.status(200).json({
            painting: paintingsDoc
        });
    }catch(error){
        res.status(400).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }
    });

    router.put(
        '/:id',
        auth,
        role.check(ROLES.Admin),
        async (req, res) => {
            try{
                const paintingsId = req.params.id;
                const update = req.body.paintings;
                const query = {_id: paintingsId};
                const {emri_piktures,slug} = req.body.paintings;

                const foundPaintings = await Paintings.findOne({
                    $or: [
                        {slug},
                        {emri_piktures}
                    ]
            });

            if(foundPaintings && foundPaintings._id.toString() !== paintingsId){
                return res.status(400).json({
                    error: 'A painting with this name or slug already exists.'
                });
            }

            await Paintings.findOneAndUpdate(query, update,{
                new: true
            });

            res.status(200).json({
                success: true,
                message: 'Painting has been updated successfully!'
            });
        }catch(error){
            res.status(400).json({
                error: 'Your request could not be processed. Please try again.'
            });
        }
        });

router.delete(
    '/delete/:id',
    auth,
    role.check(ROLES.Admin),
    async(req,res)=>{
        try{
            const painting = await Paintings.deleteOne({_id: req.params.id});

            res.status(200).json({
                success:true,
                message:`Product has been deleted successfully!`,
                product
            });
        }catch(error){
            res.status(400).json({
                error: "Your request could not be processed. Please try again."
            });
        }
    });

    module.exports = router

