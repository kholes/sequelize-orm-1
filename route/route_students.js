var express=require('express');
var rout=express.Router();
let models=require('../models');

rout.get('/',(req,res)=>{
  models.Student.findAll()
  .then(students => {
    res.render('students',{student:students});
  })
});
rout.get('/add', (req,res)=>{
  res.render('students_add');
});
rout.post('/add', (req,res)=>{
  models.Student.create(req.body)
  .then(add => {
    res.redirect('/student');
  })
});
rout.get('/edit/:id', (req,res)=>{
  models.Student.findById(req.params.id)
  .then(students => {
    res.render('students_edit',{student:students});
  })
  .catch(err => {
    res.send('Error validate')
  });
});
rout.post('/edit/:id', (req,res)=>{
  models.Student.update(req.body,{where:{'id':req.params.id}})
  .then(add => {
    res.redirect('/student');
  })
});
rout.get('/delete/:id', (req,res)=>{
  models.Student.destroy({where:{'id':req.params.id}})
  .then(students => {
    res.redirect('/student');
  });
});
module.exports=rout
