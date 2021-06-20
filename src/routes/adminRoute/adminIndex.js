const express = require('express');
const route = express.Router();
const controller = require('../../app/adminController/adminIndex');

route.get('/',controller.show);

module.exports = route;