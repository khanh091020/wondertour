const express = require('express');
const router = express.Router()
const orderController = require('../../app/adminController/orderController');
const controller = require('../../app/adminController/adminIndex');


router.get('/photographer',controller.showPhotographer)
router.get('/tour',controller.showOrderTour)
router.put('/ispaid',orderController.updateOrderPaid)
router.put('/',orderController.updateOrderStatus)

module.exports = router;