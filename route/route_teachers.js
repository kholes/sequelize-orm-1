var express=require('express');
var rout=express.Router();
let models=require('../models');

rout.get('/',(req,res)=>{
  models.Teacher.findAll()
  .then(teachers => {
    console.log(teachers);
    res.render('teachers',{teacher:teachers});
  })
});
module.exports=rout
