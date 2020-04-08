const credential = require('credential'),
      pw = credential();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name:{type:String,required:true,min:[4,'Too Short'],max:[120,"Too long,mas take 120 character"]},
    username:{type:String,required:true,min:[4,'Too Short'],max:[120,"Too long,mas take 120 character"]},
    email:{type:String,match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],required:'Email is required',min:[4,'Too Short'],max:[120,"Too long,mas take 120 character"]},
    Password:{type:String,min:[4,'Too Short'],max:[120,"Too long,mas take 120 character"],required:'Password is required'},
    VerifyPassword:{type:String,min:[4,'Too Short'],max:[120,"Too long,mas take 120 character"],required:'Password is required'},
});

const storedhash = pw.hash(Password,function(err,hash){
    if(err){
        throw err;
    }
    console.log("Store The Password hash",hash);
})

const userInput = Password;

pw.verify(storedhash,userInput,function(err,isValid){
    const msg;

    if(err){
            throw err;
    }
    msg = isValid ? 'Password Match!':"Retry";
    console.log(msg);
})

