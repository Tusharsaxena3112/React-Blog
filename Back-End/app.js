const express = require('express');
const mongoose  = require('mongoose');
const {MONGOURI} = require('./key');
const app = express();
const PORT = 5000;

//Connection to MONGODB
mongoose.connect(MONGOURI);
mongoose.connection.on('connected',()=>{
    console.log('connected');
});
mongoose.connection.on('error',(err)=>{
    console.log(err);
});

//Routes 
app.get('/',(req,res)=>{
    res.send('Hello I am Home');
});
app.get('/category',(req,res)=>{
    res.send('Hello I am category Page');
});
app.get('/single',(req,res)=>{
    res.send('Hello I am Single page');
});



app.listen(PORT,()=>{
    console.log('Server is running at 5000');
});