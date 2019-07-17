// /app.js

'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const sass = require('node-sass-middleware');
const express = require('express');

// Models
const shortURL = require('./models/URL');

const app = express();

// Middlewares

// Database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
    () => {
	console.log('Database connection established');
    },
    err => {
	throw new Error(err);
    }
);

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

let originalUrl, newUrl, newShortUrl;
app.post('/api/shorturl/new', urlEncodedParser, (req, res, next) => {
    shortURL.estimatedDocumentCount({}).exec((err, count) => {
	if (err) {
	    throw new Error(err);
	}
	newUrl = new shortURL({
	    "originalUrl": req.body.url,
	    "shortUrl": count + 1
	});
	newUrl.save();
	next();
    });
}, (req, res) => {
    res.json({
	"original_url": newUrl.originalUrl,
	"short_url": newUrl.shortUrl
    });
});

module.exports = app;
