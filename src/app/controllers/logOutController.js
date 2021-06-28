 class logoutController {
     logout(req,res,next) {
        // res.clearCookie("token");
        req.session.destroy();
        res.redirect('/')
     }
 }

 module.exports= new logoutController