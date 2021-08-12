const express = require("express");
const route = express.Router();
const newContrller = require('../../app/controllers/siteController');
const index = require('../../app/controllers/homeController')

route.get("/about.html",newContrller.index);
route.get('/live-chat',newContrller.showLiveChat)
route.get('/',index.index)

module.exports = route;
