const express = require('express');
const app  = express();
const Port = 4200;
const mongoose = require('mongoose');
const dbConfig = require('./urlconfig/pass');


mongoose.connect(dbConfig.url,{useNewUrlParser:true});
//To Test If we connect successfully

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('We are connected');
})


app.get('/',(req,res)=>{
    res.send("EveryThing Ok");
})

app.listen(Port,()=>{
    console.log('server works perfectly');
})