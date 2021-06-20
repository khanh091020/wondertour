const express = require("express");
const route = express.Router();
const newContrller = require('../app/controllers/siteController');
const index = require('../../src/app/controllers/homeController')

route.get("/about.html",newContrller.index);
route.use('/',index.index)

module.exports = route;
