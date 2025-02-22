const mongoose = require("mongoose")

const  teamSchema = new mongoose.Schema({
    name:{type:String , require:true},
    members:[{type:mongoose.Schema.Types.ObjectId , ref:"User"}]
},{timestamps:true})

const Team = mongoose.model("Team" , teamSchema)
module.exports = Team