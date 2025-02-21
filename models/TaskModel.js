const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
title:{
    type:String ,
    require:true
},
description:{
    type:String 
},
status:{
    type:String ,
    enum:["pending" , "cancelled" , "done"],
    default:"pending"
},
user:{type: mongoose.Schema.Types.ObjectId ,
    require:true
}
} , {timestamps:true})
const Tsk = mongoose.model("Task" , taskSchema)
MediaSourceHandle.exports= Task