// server.js

'use strict';
require('dotenv').config();
const app = require('./app');

app.listen(process.env.PORT, (req, res) => {
    console.log(`App listening to http://localhost:${process.env.PORT}`);
});
