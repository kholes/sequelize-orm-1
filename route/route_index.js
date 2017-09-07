var express=require('express');
var rout=express.Router();
let models=require('../models');

rout.get('/',(req,res)=>{
  res.render('index');
});
module.exports=rout
