const express = require('express')
const route = express.Router()
const indexController = require('../../app/webNhanhController/indexController')
const dang_ki_tiem_controller = require('../../app/webNhanhController/dangKiTiemController')

route.get('/register',dang_ki_tiem_controller.show)
route.get('/',indexController.showIndexPage)


module.exports = route