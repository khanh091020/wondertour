const express = require('express');
const route = express.Router();
const controller = require('../../app/adminController/adminIndex');

route.get('/account/partner',controller.showPartners)
route.get('/listHotelOrder',controller.showListHotelOrder)
route.get('/account-user',controller.showUsers)
route.get('/account-admin',controller.showAdmin)
route.get('/index',controller.show);
route.get('/',controller.show);

module.exports = route;