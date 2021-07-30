const express = require('express')
const route = express.Router()
const indexController = require('../../app/webNhanhController/indexController')

route.get('/',indexController.showIndexPage)

module.exports = route