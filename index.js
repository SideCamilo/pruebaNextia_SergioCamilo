'use strict'
const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// database conection

// import routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

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