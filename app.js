require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));



const transaction = require('./src/routes/transaction');

// const { urlencoded } = require('body-parser');
app.use('/transaction',transaction);


module.exports = app;