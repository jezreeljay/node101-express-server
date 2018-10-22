// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const bestPlaces = require('./data');

data = (req, res) => {
    res.send(bestPlaces);
}

success = (req, res) => {
    res.send('Success!');
}

// create your express server below
const app = express();

// add your routes and middleware below
app.use('/', express.static(__dirname), morgan('dev'));
app.get('/data', data);
app.get('/', success);

// finally export the express application
module.exports = app;
