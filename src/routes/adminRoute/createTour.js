const express = require('express');
const route = express.Router();
const controller = require('../../app/adminController/createTour');

route.get('/',controller.show);
route.post('/',controller.save)
module.exports = route;