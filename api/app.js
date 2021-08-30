require('dotenv').config();

const createError = require('http-errors');
const logger = require('morgan');
const express = require('express');

const app = express();




/*Middlewares*/
app.use(express.json())
app.use(logger('dev'));

/*Configure Routes*/
const router = require('./config/routes.config');
app.use('/api/v1', router);

/*Handle Errors*/
app.use((req, res, next) => {
    next(createError(404, 'Path not found'));
})

app.use((error, req, res, next) => {


    const data = {}
    data.message = error.message;

    res.status(error.status || 500).json(data)
})

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
    console.log(`Ready! listening on port ${port}`);
})