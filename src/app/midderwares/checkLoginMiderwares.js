module.exports = function (req,res,next) {
    if (req.session.token) {
            res.locals.session = req.session
    } 
 
    next()
}