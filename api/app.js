require('dotenv').config();

const createError = require('http-errors');
const logger = require('morgan');
const express = require('express');

const app = express();



/*Middlewares*/
app.use(express.json())
app.use(logger('dev'));




const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
    console.log(`Ready! listening on port ${port}`);
})