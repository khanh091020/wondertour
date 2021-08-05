const express = require('express')
const route = express.Router()
const indexController = require('../../app/webNhanhController/indexController')
const priviteOrderMiddleware = require('../../app/midderwares/privateOrderMiddleware')
const dang_ki_tiem_controller = require('../../app/webNhanhController/dangKiTiemController')

route.get('/lich-di-tiem',priviteOrderMiddleware,dang_ki_tiem_controller.showLichDiTiem)
route.get('/co-so-quan-li',dang_ki_tiem_controller.showListDon)
route.get('/generalInfo',dang_ki_tiem_controller.showInfo)
route.get('/register',priviteOrderMiddleware,dang_ki_tiem_controller.show)
route.post('/taolich',priviteOrderMiddleware,dang_ki_tiem_controller.taolich)
route.get('/',indexController.showIndexPage)


module.exports = route