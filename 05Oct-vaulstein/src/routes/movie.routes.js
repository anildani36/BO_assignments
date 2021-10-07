module.exports = app => {
    const movies = require("../controllers/movie.controller");
  
    var router = require("express").Router();
  
    //create new movie
    router.post("/", movies.create);
  
    //get all movies
    router.get("/", movies.findAll);
  
    //get all published movies
    router.get("/published", movies.findAllPublished);
  
    app.use('/api/tutorials', router);
};