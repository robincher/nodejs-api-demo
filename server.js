'use strict';
const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Task = require('./api/models/taskModel'); //created model loading here
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
let index =  require('./api/routes/index');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/demo',{useNewUrlParser: true}); 

// Swagger definition
// You can set every attribute except paths and swagger
// https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md
let swaggerDefinition = {
    info: { // API informations (required)
      title: 'Sample REST API with Node', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'Sample Task API', // Description (optional)
    },
    host: 'localhost:3000', // Host (optional)
    basePath: '/', // Base path (optional)
};
  
// Options for the swagger docs
let options = {
    // Import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // Path to files that contain the annotated API docs
    apis: ['./api/routes/index.js','./api/routes/tasks/index.js', './routers/parameters.yaml'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
let swaggerSpec = swaggerJSDoc(options);

// Serve swagger docs the way you like (Recommendation: swagger-tools)
app.get('/api-docs.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send("swaggerSpec");
});

//Serve Default homepage
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//Parse incoming request bodies and register nested route
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', index);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('RESTful API server started on: ' + port);