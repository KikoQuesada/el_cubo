require('dotenv').config();

const createError = require('http-errors');
const logger = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

/*TODO: Configurar la Base de Datos*/

require('./config/db.config');
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
    if (error instanceof mongoose.Error.ValidationError) { 
        error = createError(400, error)
    }

    const data = {}
    data.message = error.message;

    data.errors = error.errors ? Object.keys(error.errors).reduce((errors, key) => {
        errors[key] = error.errors[key].message;
        return errors
    }, {}) : undefined

    res.status(error.status || 500).json(data)
})

const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
    console.log(`Ready! listening on port ${port}`);
})