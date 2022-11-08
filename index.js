'use strict'
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

var app = express();

// body capture
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database conection

// import routes

// route middlewares
app.get('/', (req, res) => {
    res.json({
        state: true,
        message: 'working!'
    })
});

//start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
})