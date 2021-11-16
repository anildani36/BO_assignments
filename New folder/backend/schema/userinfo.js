const mongoose =require("mongoose");

const getinfo =new mongoose.Schema({
    FirstName:{
        type: String,
        required: true,
        trim:true,
        min:5,
        max:20
    },
    lastName:
    {
        type: String,
        required: true,
        trim:true,
        min:5,
        max:20

    },
    Gender:{
        type: String,
        required: true
       
    },
    Height:{
        type: String,
        required: true,
        trim:true,
    },
    Weight:{
        type: String,
        required: true,
        trim:true,
    },
    IdealWeight:{
        type: String,
        required: true,
        trim:true,

    },
    State:{
        type: String,
        required: true,
        trim:true,
    },
     City:{
        type: String,
        required: true,
        trim:true,
     },
     Medical_Issue:{
        type: String,
        required: true
        
     }
});
const userinfo = new mongoose.model("userinfo", getinfo);
module.exports = userinfo;
