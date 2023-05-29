const express = require('express');
const router = express.Router();

const Koleksionet = require('../../models/Koleksionet');
const Paintings = require('../../models/Paintings');
const auth = require('../../middleware/auth');
const {ROLES} = require('../../constants')

router.post('/add', auth, role.check(ROLES.Admin), async (req, res) => {
        try{
            const name = req.body.name;
            const description = req.body.description;
            const isActive = req.body.isActive;

            if(!description || !name){
                return res
                .status(400)
                .json({msg: "Please enter all fields"});
            }

            const koleksionet = new Koleksionet({
                name,
                description,
                isActive
            });

            const koleksionetDoc = await koleksionet.save();

            res.status(200).json({
                success: true,
                message: "Koleksioni u shtua me sukses",
                brand: koleksionetDoc
            });
        }catch(error){
            res.status(400).json({
                error:"Your request could not be processed. Please try again."
            });
        }
});


router.get('/list',async (req, res) => {
    try{
        const koleksionet = await Koleksionet.find({
            isActive: true
        }).populate('emri_koleksionit','data_fillimit','data_mbarimit');

        res.status(200).json({
            error: 'Your request could not be processed. Please try again.'
        });
    }catch(error){
        res.status(400).json({
            error:"Your request could not be processed. Please try again."
        });
    }
});

router.get(
    '/',
    auth,
    role.check(ROLES.Admin),
    async (req, res) => {
        try{
            let koleksionet = null;

            if(req.user.Admin){
                koleksionet = await Koleksionet.find({
                    Admin: req.user.Admin
                }).populate('emri_koleksionit','data_fillimit','data_mbarimit');
            }else{
                koleksionet = await Koleksionet.find({}).populate('emri_koleksionit','data_fillimit','data_mbarimit');
            }

            res.status(200).json({
                koleksionet
            });
        }catch(error){
            res.status(400).json({
                error:"Your request could not be processed. Please try again."
        });
    }

});

router.get('/:id', async (req, res) => {
    try{
        const koleksionetId = req.params.id; //kur te krijohet id ndrro parametrin
        const koleksionetDoc = await Koleksionet.findOne({_id: koleksionetId})
        .populate('emri_koleksionit','_id');

        if(!koleksionetDoc){
            return res.status(404).json({
                message: "Koleksioni nuk u gjet"
            });
    }

    res.status(200).json({
        koleksionet: koleksionetDoc
    });
    }catch(error){
        res.status(400).json({
            error:"Your request could not be processed. Please try again."
        });
    }
});

router.get(
    '/list/select',
     auth,
     role.check(ROLES.Admin),
        async (req, res) => {
            try{
                let koleksionet = null;

                if(req.user.Admin){
                    koleksionet = await Koleksionet.find({
                        Admin: req.user.Admin
                    },
                    'emri_koleksionit'
                    );
            }else{
                koleksionet = await Koleksionet.find(
                    {},
                    'emri_koleksionit'
                );
            }


            res.status(200).json({
                koleksionet
            });
        }catch(error){
            res.status(400).json({
                error:"Your request could not be processed. Please try again."
            });
        }
    }
);

router.put('/:id',
    auth,
    role.check(ROLES.Admin),
    async (req, res) => {
        try{
            const koleksionetId = req.params.id;
            const update = req.body.koleksionet;
            const query = {_id: koleksionetId};
            const {slug} = req.body.koleksionet;
        
            const foundKoleksionet = await Koleksionet.findOne({
                $or:[{slug}]
            });

            if(foundKoleksionet && foundKoleksionet._id !== koleksionetId){
                return res.status(400).json({
                    message: `Koleksioni me emrin ${slug} ekziston`
                });
            }
            await Koleksionet.findOneAndUpdate(query, update, {
                new: true
            });

            res.status(200).json({
                success: true,
                message: "Koleksioni u ndryshua me sukses"
            });
        }catch(error){
            res.status(400).json({
            error:"Your request could not be processed. Please try again."
            });
        }
    }
);

router.put(
    '/:id/active',
    auth,
    role.check(ROLES.Admin),
    async (req, res) => {
        try{
            const koleksionetId = req.params.id;
            const update = req.body.koleksionet;
            const query = {_id: koleksionetId};

            if(update.isActive){
              const Pikturat = await Pikturat.find({
                    koleksionet: koleksionetId
              });
              store.disableProduct(Pikturat);
            }

            await Koleksionet.findOneAndUpdate(query, update, {
                new: true
            });

            res.status(200).json({
                success: true,
                message: "Koleksioni u ndryshua me sukses"
            });
        }catch(error){
            res.status(400).json({
            error:"Your request could not be processed. Please try again."
            });
        }
    }
);

module.exports = router;