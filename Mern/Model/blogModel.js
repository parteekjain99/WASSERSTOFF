const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:{
        type:[String],
        required:true
    },
    body:{
        type:[String],
        required:true,
    },
    percentage:{
type:String
    }
},{timestamps:true})
module.exports=mongoose.model("blog",BlogSchema ) 