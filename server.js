'use strict'
const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const HOSTNAME = 'localhost';

var app = express();

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}/`);
})