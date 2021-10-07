const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4000"
};

const db = require("./src/models/movies.model");
db.sequelize.sync({force:true}).then(() => {
    console.log("Resync DB");
});

app.use(cors(corsOptions));

// parse requests of content-type
app.use(express.json()); //application/json
app.use(express.urlencoded({ extended: true })); //application/urlencoded

require("./src/routes/movie.routes")(app);
// user route
app.get("/", (req, res) => {
  res.send({ message: "Welcome to Home Page" });
});

// set port for server
const PORT = process.env.PORT || 4000;

//listen server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});