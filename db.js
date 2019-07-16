// db.js
// Establish connection to MongoDB Atlas clusters.

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
    () => {
	console.log('Database connection established.');
    },
    err => {
	throw new Error(err);
    }
);
