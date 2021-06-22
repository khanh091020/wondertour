const express = require('express');
const route = express.Router();
const bookTourController = require('../app/controllers/bookTourController');

route.get('/online/:slug',bookTourController.showOnline)
route.get('/direct/:slug',bookTourController.showDirect)

module.exports = route