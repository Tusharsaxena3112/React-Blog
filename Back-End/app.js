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
//models import 

require('./models/post');
require('./models/category');


app.use(express.json()); 
//Routes 
app.use(require('./routes/post'));
app.use(require('./routes/category'));



app.listen(PORT,()=>{
    console.log('Server is running at 5000');
});