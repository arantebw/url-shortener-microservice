// app.js

'use strict';
const db = require('./db');
const cors = require('cors');
const sass = require('node-sass-middleware');
const express = require('express');

const app = express();

// Middlewares

// Sass
app.use(sass({
    src: __dirname + '/assets',
    dest: __dirname + '/public',
    debug: true,
    outputStyle: 'compressed'
}));

// Font Awesome
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));

// Load assets
app.use(express.static(__dirname + '/public'));

// CORS
app.use(cors({ optionSuccessStatus: 200 }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
