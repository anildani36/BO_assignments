const express=require("express");
const routes=express.Router();
const multer=require('multer');
var fs = require('fs');
const breakfasts=require("../schema/dietchart");
routes.use(express.json());
routes.use(express.urlencoded({extended:false}));
const abc=require('../schema/data.js');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,new Date().toISOString() + file.originalname);
    }
});
const upload=multer({storage:storage});
//const upload=multer({dest:'uploads/'});
routes.post("/breakfast",upload.single('breakfastimage'), async (req, res,next) => {
    console.log(req.file);
    try {
        // getting userinfo entered fields
        const getbreakfast = new breakfasts({
            _id:new mongoose.Types.ObjectId(),
            Breakfast : {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
            
            


        })
        
        //save method to store entered data in db
        const userbreakfast = await getbreakfast.save();
        res.status(201).send("User breakfastsucessfully");

    } catch (error) {
        res.status(400).send(error);
    }
})

routes.get("/breakfasts", async (req, res,next) => {
    const image=await abc.map(function getRandomItem(set) {
    let items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)];


})
});
module.exports = routes;
// app.get('/', (req, res) => {
//     imgModel.find({}, (err, items) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             res.render('imagesPage', { items: items });
//         }
//     });
// });