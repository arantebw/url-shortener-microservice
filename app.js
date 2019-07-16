// app.js

'use strict';
const sass = require('node-sass-middleware');
const express = require('express');

const app = express();

// Load assets
app.use(express.static(__dirname + '/public'));

// Sass
app.use(sass({
    'src': __dirname + '/assets',
    'dest': __dirname + 'public',
    'debug': true,
    
}));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
