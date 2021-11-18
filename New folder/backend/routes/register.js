const express=require("express");
const routes=express.Router();
const bcrypt = require("bcryptjs");
const Register=require("../schema/Register");

routes.use(express.json());
routes.use(express.urlencoded({extended:false}));
//routes for requests made by user
routes.post("/user/login", async (req, res) => {
    try {
        //getting user entered fields
        const uemail = req.body.email;
        const password = req.body.password;

        //finding user entered email in db
        const userEmail = await Register.findOne({email:uemail});
        //matching user entered password with hashed password in db
        const isMatch = await bcrypt.compare(password, userEmail.password);

        //password match cases to be executed
        if(isMatch) {
            res.status(201).send("login succesfull");
            const data=res.json();
        }else {
            res.send("Invalid Email or Password");
        }

    } catch (error) {
        res.status(400).send("Invalid Email or Password");
    }
});
routes.post("/user/register", async (req, res) => {
    try {
        // getting user entered fields
        const registerUser = new Register({
            name : req.body.name,       
            email : req.body.email,
            Mobile : req.body.Mobile,
            password : req.body.password
        })
        
        //save method to store entered data in db
        const registered = await registerUser.save();
        res.status(201).send("User register sucessfully");

    } catch (error) {
        res.status(400).send(error);
    }
})

//get all register
routes.get("/Register", async (req, res,next) => {
    try {
              
       
        const registerdata = await Register.find({});
        res.send(registerdata);
    }
    catch (e) {
        res.status(400).send(e);
    }
})


module.exports = routes;