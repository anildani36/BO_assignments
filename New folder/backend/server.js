//import body-parser from 'body-parser';
const express = require("express");
const app = express();
const bodyparser=require('body-parser');
const cors=require('cors');
// const multer=require('multer');
// const uploads=multer({dest:'/uploads/'});
// var fs = require('fs');
// require('dotenv/config');   
const port = process.env.PORT || 4000;

require("./connection")


const routes=require("./routes/register.js");
const userinfo=require("./routes/userinfo.js");
//const breakfast=require("./routes/dietchart.js");

// var corsOptions = {
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }


//app.use("/",breakfast);
app.use(cors());
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
//app.use(cors(corsOptions));
//defining port for server

app.use("/",routes);
app.use("/",userinfo);

// Server port listening
app.listen(port, () => {
    console.log(`Sever running at port ${port}`);
})