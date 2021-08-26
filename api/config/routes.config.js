const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');


/*USERS ACTIONS*/
router.get('/users', users.list)
router.post('/users');
router.get('/users/:id');
router.put('/users/:id');
router.delete('/users/:id');

module.exports = router;