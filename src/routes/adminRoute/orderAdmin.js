const express = require('express');
const router = express.Router()
const orderController = require('../../app/adminController/orderController');


router.put('/ispaid',orderController.updateOrderPaid)
router.put('/',orderController.updateOrderStatus)

module.exports = router;