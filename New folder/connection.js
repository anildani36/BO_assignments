const mongoose = require("mongoose");

const db = "mongodb+srv://admin:admin@cluster0.ytjur.mongodb.net/database?retryWrites=true&w=majority"

//port & db name declaration for mongo db 
mongoose.connect(db, {
    useNewUrlParser:true,
    //userUnifiedTopology:true,
    //useCreateIndex:true,
    //useFindAndModify:false
}).then(() => {
    console.log(`Connected to DataBase`);
}).catch((e) => {
    console.log(`No connection`);
})