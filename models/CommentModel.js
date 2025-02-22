const { type } = require("express/lib/response")
const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    task:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"Task" ,
        require:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"User",
        require:true
    },
    content:{type:String , require:true} ,
    createAt:{type:Date , default:Date.now}
})

const Comment = mongoose.model("Comment" , commentSchema)
module.exports = Comment