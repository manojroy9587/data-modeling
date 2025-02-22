const { type } = require("express/lib/response")
const mongoose = require("mongoose")

const fileUploadSchema = new mongoose.Schema({
    task:{type:mongoose.Schema.Types.ObjectId , ref:"Task", require:true},
    filename:{type:String , require:true},
    fileUrl:{type:String , require:true},
    uploadedAt:{type:Date , default:Date.now}
})

const FileUpload = mongoose.Schema("FileUpload" , fileUploadSchema)
module.exports = FileUpload