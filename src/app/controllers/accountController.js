const tours = require('../controllers/models/tourMany');
const account = require('../controllers/models/account')
const {mutipleMongooseTobject} = require('../../util/mongoose')
const {mongooseToObject} = require('../../util/mongoose')
const jsonwebtoken = require('jsonwebtoken')
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
}
module.exports = new accountControlller