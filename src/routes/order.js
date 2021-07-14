const express = require('express');
const router = express.Router()
const orderController = require('../app/controllers/orderController')

router.post('/',orderController.createOrder)
router.put('/',orderController.updateOrderStatus)

module.exports = router;