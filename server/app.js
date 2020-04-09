const express = require('express');
const app  = express(),
    Port = 4200,
    mongoose = require('mongoose'),
    dbConfig = require('./urlconfig/pass'),
    passport = require('passport'),
    localPassport = require('passport-local'),
    User = require('./models/model'),
    bodyParser = require('body-parser'),
    userRoutes = require('./route/user'),
    cors = require('cors');
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true })); //if false then parse only strings

app.use(require('express-session')({
    secret:'Not Everyday',
    resave:false,
    saveUninitialized:false
}))

app.use('/public', express.static(__dirname + '/public'));


app.use(cors());

mongoose.connect(dbConfig.url,{useNewUrlParser:true,useUnifiedTopology: true});
//To Test If we connect successfully
app.use(passport.initialize());
app.use(passport.session());
// app.use(new localPassport(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('We are connected');
})



app.get('/',(req,res)=>{
    res.send("EveryThing Ok");
})
app.use('/api/users',userRoutes);
app.listen(Port,()=>{
    console.log('server works perfectly');
})