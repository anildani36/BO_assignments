const mongoose = require("mongoose");


// User Schema Declaration
const Breakfastschema = new mongoose.Schema({
    name: String,
    Breakfast:
    {
        data: Buffer,
        contentType: String
    }
});




//creating new collection in db
const breakfasts = new mongoose.model("breakfasts", Breakfastschema);
module.exports = breakfasts;