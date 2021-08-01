const express = require('express')
const route = express.Router()
const controller = require('../app/controllers/partnershipController')

route.get('/get-banks',controller.getBanks)
route.get('/payment-order',controller.showPaymentOrder)
route.get('/hotel-management',controller.showHotelManagament)
route.get('/general-info',controller.showGeneralInfo)
route.get('/payment-info',controller.showPaymentInfo)
route.get('/create-room/details',controller.showCreatRommDetails)
route.get('/create-room',controller.showCreateRoomOptions)
route.get('/rewiew',controller.showRewiew)
route.get('/',controller.showHome)

module.exports = route