const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Task = require('./api/models/taskModel'); //created model loading here
const port = process.env.PORT || 3000;

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/demo'); 

//Pmoarse incoming request bodies 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//register the route
const routes = require('./api/routes'); //importing route
// let router = require('express').Router();
// router.use('/tasks', require('./api/routes/task.js'));
routes(app); 

app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('RESTful API server started on: ' + port);