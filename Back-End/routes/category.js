const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const category = mongoose.model('Category');

router.get('/categories',(req,res)=>{
    category.find()
    .then(categories=>{
        res.json({categories});
    })
    .catch(err=>{
        console.log(err);
    })
});

module.exports = router;