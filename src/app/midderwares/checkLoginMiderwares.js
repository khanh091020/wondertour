const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var modal = require('../controllers/models/account')
module.exports = function (req,res,next) {
    res.locals._user = {
        username : '',
        emails : ''
    }
    if (req.cookies.token) {
        modal.findOne({_id : jwt.verify(req.cookies.token,'mk')})
            .then(account => {
              
                res.locals._user.username = account.lastName;
                res.locals._user.emails = account.email;
                    
               
            })
            .catch(next)
    } else {
        
    }
    // if(req.cookies.token != null) {
    //     console.log(req.cookies)
    //     modal.findOne({_id : jwt.verify(req.cookies.token,'mk')})
    //     .then(account => {
            
    //          res.locals._user = account;
          
    //     })
    // }


    next()
}