var express=require('express');
var rout=express.Router();
let models=require('../models');

rout.get('/',(req,res)=>{
  models.Subject.findAll()
  .then(subjects => {
    // console.log(subjects);
    res.render('subjects',{subject:subjects});
  })
});
module.exports=rout
