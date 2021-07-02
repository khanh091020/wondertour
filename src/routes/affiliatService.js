const express = require('express')
const route = express.Router()
const hotelController = require('../app/controllers/hotelController')


route.get('/hotel',hotelController.showHotel)
route.get('/flight',hotelController.showFlight)

module.exports = route