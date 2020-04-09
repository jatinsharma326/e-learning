// const User = require('../models/model');

exports.login = function(req,res){

}


exports.register = function(req,res){
const {Name,username,email,password} = req.body
res.json({Name,username,email,password});
}

