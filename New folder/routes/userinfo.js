const express=require("express");
const routes=express.Router();
const userinfo=require("../schema/userinfo");

routes.use(express.json());
routes.use(express.urlencoded({extended:false}));


routes.post("/userinfo", async (req, res) => {
    try {
        // getting userinfo entered fields
        const getuserinfo = new userinfo({
            FirstName : req.body.FirstName,
            lastName : req.body.lastName,
            Gender : req.body. Gender,
            Height : req.body. Height,
            Weight:  req.body.Weight,
            IdealWeight:  req.body.IdealWeight,
            State:  req.body.State,
            City:  req.body.City,
            Medical_Issue:req.body. Medical_Issue


        })
        
        //save method to store entered data in db
        const userinfos = await getuserinfo.save();
        res.status(201).send("User enterd information sucessfully");

    } catch (error) {
        res.status(400).send(error);
    }
})

routes.get("/allusers", async (req, res,next) => {
    try {
              
       
        const alluser = await userinfo.find({});
        res.send(alluser);
    }
    catch (e) {
        res.status(400).send(e);
    }
})
module.exports = routes;