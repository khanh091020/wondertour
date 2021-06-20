const express = require('express');
const route = express.Router();
const bookTourController = require('../app/controllers/bookTourController');

route.get('/online',bookTourController.showOnline)
route.get('/direct',bookTourController.showDirect)

module.exports = route