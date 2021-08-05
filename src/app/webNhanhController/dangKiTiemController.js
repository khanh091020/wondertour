const account = require('../controllers/models/account')
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseTobject } = require('../../util/mongoose');
const dangkilich = require('../webNhanhController/nhanhModal/dangkitiem')
class dang_ki_tiem_controller {
    // user
    // get
    show (req,res,next) {
      account.findOne({email : req.email})
      .then(account => {
        res.render('webnhanh/dangkitiem', {
          user : mongooseToObject(account)
        })
      })
      .catch(next)
     
    }
    // get 
    // lịch đi tiêm 
    showLichDiTiem(req, res,next) {
      dangkilich.find({idUser : req.id})
      .then(list => {
        res.render('webnhanh/lichditiem',
        {
          list : mutipleMongooseTobject(list)
        })
      })
    }
    // list dơn yeu cau tien chung
    // cơ sở
    // show
    showListDon(req, res,next) {
      dangkilich.find()
      .then(list => {
        res.render('webnhanh/cosoquanli',
        {
          list : mutipleMongooseTobject(list)
        })
      })
    }

    // post 
    // tao lich 
    taolich(req, res,next) {
        req.body.idUser = req.id
        dangkilich.create(req.body)
        console.log(req.body)
        res.send('ok')
    }
    // show info
    showInfo(req, res, next) {
      res.render('webnhanh/trancanhan')
    }

  }

module.exports = new dang_ki_tiem_controller;