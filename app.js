var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');

let index=require('./route/route_index.js');
let teacher=require('./route/route_teachers.js');
let subject=require('./route/route_subjects.js');
let student=require('./route/route_students.js');
app.use('/', index);
app.use('/teacher', teacher);
app.use('/subject', subject);
app.use('/student', student);

app.listen(3000,()=>{
  console.log('Gunakan port 3000');
});
