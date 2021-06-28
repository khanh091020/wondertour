 class logoutController {
     logout(req,res,next) {
        // res.clearCookie("token");
        req.session.destroy();
        res.redirect('/index.html')
     }
 }

 module.exports= new logoutController