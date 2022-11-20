const mongoose = require('mongoose')

const Userschema=new mongoose.Schema({

    email:
    {
         type:String,
        required:true,

    },
    password:{

        type:String,
        required:true
    },
    otp:{
        type:Number
    }
},{timestamps:true})
module.exports=mongoose.model("User",Userschema)