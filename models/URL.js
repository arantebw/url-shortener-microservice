// /models/URL.js

'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const URLSchema = Schema({
    originalUrl: String,
    shortUrl: Number
});

module.exports = mongoose.model('URL', URLSchema);
