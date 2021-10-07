//create new movie
exports.create = (req, res) => {
  try {
        //validate request
        if (!req.body.title) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
            return;
        }

        //create movie
        const movie = {
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        };

        //save movie in db
        Movie.create(movie)
            .then(data => {
            res.send(data);
            })
            .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error while storing movie."
            });
        });
  } catch (error) {
      console.log(error);
  }
};

//find all movies
exports.findAll = (req, res) => {
    try {
        const title = req.query.title;
        var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

        Movie.findAll({ where: condition })
            .then(data => {
            res.send(data);
            })
            .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error in getting data"
            });
        });
    } catch (error) {
        console.log(error);
    }
};

//find one movie by id
exports.findOne = (req, res) => {
  
};

//update movie by id
exports.update = (req, res) => {
  
};

//delete movie with specified id
exports.delete = (req, res) => {
  
};

//delete all movies
exports.deleteAll = (req, res) => {
  
};

//find published movies
exports.findAllPublished = (req, res) => {
    try {
        Movie.findAll({ where: { published: true } })
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "error in getting data"
        });
        });
    } catch (error) {
        console.log(error)
    }
};