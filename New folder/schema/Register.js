const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// User Schema Declaration
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim:true,
        min:5,
        max:40
    },
    email : {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    
    
    Mobile :{
        type:Number,
        required:true,
        trim:true
    },
    password : {
        type: String,
        required: true,
        trim:true
    }
})

//bcrypt algorithm for hashing password while registration
userSchema.pre("save", async function(next) {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

//creating new collection in db
const Register = new mongoose.model("Register", userSchema);
module.exports = Register;