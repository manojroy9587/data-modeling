const { type } = require("express/lib/response")
const mongoose = require("mongoose")
const notificationSchema= new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId , ref:"User" , require:true},
    message:{type:String , require:true},
    isRead:{type:Boolean , default:false},
    createdAt:{type:Date , default:Date.now}
} , {timestamps:true})

const Notification = mongoose.model("Notification" , notificationSchema)
module.exports = Notification