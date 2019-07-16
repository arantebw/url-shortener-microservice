// app.js

'use strict';
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');
const sass = require('node-sass-middleware');
const express = require('express');

const app = express();

// Middlewares

// Body Parser
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

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

let originalUrl;
app.post('/api/shorturl/new', urlEncodedParser, (req, res, next) => {
    originalUrl = req.body.url;
    next();
}, (req, res) => {
    res.json({
	"original_url": originalUrl,
	"short_url": "short url"
    });
});

module.exports = app;
