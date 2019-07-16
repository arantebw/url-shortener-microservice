// /models/URL.js

'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const URLSchema = Schema({
    originalUrl: { type: String },
    shortUrl: { type: String }
});

module.exports = mongoose.model('URL', URLSchema);
