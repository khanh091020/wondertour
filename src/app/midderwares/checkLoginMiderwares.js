const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var modal = require('../controllers/models/account')
module.exports = function (req,res,next) {
    res.locals._user = {
        username : '',
        emails : ''
    }
    if (req.session.token) {
        // modal.findOne({_id : jwt.verify(req.session.token,'mk')})
        //     .then(account => {
             
            //    Object.assign(res.locals._user, {
            //    username : account.lastName,
            //    emails : account.email
            //    })
               
               
            // })
            // .catch(next)
            res.locals.session = req.session
    } 
   


    next()
}