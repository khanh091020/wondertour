const express = require('express');
const route = express.Router();
const controller = require('../../app/adminController/adminIndex');

route.get('/account-user',controller.showUsers)
route.get('/account-admin',controller.showAdmin)
route.get('/order/photographer',controller.showPhotographer)
route.get('/order/tour',controller.showOrderTour)
route.get('/index',controller.show);

module.exports = route;