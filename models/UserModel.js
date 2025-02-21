const { type } = require("express/lib/response")
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{type:String , require:true} ,
    email:{type:String , require:true , unique:true},
    password:{type:String} ,
    authProvider: {type:String , enum:["local" , "google" , "facebook"],
        default:"local"
    },
    createdAt:{type:Date , default:Date.now}
    

})

const User = mongoose.model("User" , userSchema)
module.exports = User