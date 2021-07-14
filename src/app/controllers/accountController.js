const tours = require('../controllers/models/tourMany');
const account = require('../controllers/models/account')
const {mutipleMongooseTobject} = require('../../util/mongoose')
const {mongooseToObject} = require('../../util/mongoose')
const jsonwebtoken = require('jsonwebtoken')
const order = require('./models/order')

class accountControlller {
    showAccountDetail(req,res,next) {
       if(req.session.token)
       {
            var email = jsonwebtoken.verify(req.session.token,'mk')
           account.findOne({email : new RegExp(email.email, 'i')})
         .then(account => {
             res.render('partials/accountCommon',
             {
                 account : mongooseToObject(account)
             })
         }) 
       }
       else {
           res.redirect('/index.html')
       }
    }
    showAccountLove(req,res,next) {
        tours.find({})
        .then(list => {
            res.render('partials/accountCommon',{
                listSearch : mutipleMongooseTobject(list)
            });
        })
        .catch(next)
    }
    
    showOrders(req,res,next) {
        if(!req.email)
        {
            res.json({
                success : false, message : 'Please login to order this tour !'
            })
        }
           order.find({userEmail : req.email}).populate('tourID',['name','img','slug','startPlace']).sort({createdAt : 'desc'})
           .then(orders => {
               res.render('partials/accountCommon',{
                   orders : mutipleMongooseTobject(orders)
               })
           })
           .catch(next)
     }
}
module.exports = new accountControlller