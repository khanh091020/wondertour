const express = require('express')
const route = express.Router()
const indexController = require('../../app/webNhanhController/indexController')
const authCheckUser = require('../../app/midderwares/authCheckUser')
const dang_ki_tiem_controller = require('../../app/webNhanhController/dangKiTiemController')

route.get('/lich-di-tiem',authCheckUser,dang_ki_tiem_controller.showLichDiTiem)
route.get('/co-so-quan-li',dang_ki_tiem_controller.showListDon)
route.get('/generalInfo',dang_ki_tiem_controller.showInfo)
route.get('/register',authCheckUser,dang_ki_tiem_controller.show)
route.post('/taolich',authCheckUser,dang_ki_tiem_controller.taolich)
route.get('/',indexController.showIndexPage)


module.exports = route