const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
var modal = require('../controllers/models/account')
module.exports = function (req,res,next) {
    if (req.session.token) {
            res.locals.session = req.session
    } 
   


    next()
}