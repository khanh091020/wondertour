 class logoutController {
     logout(req,res,next) {
        // res.clearCookie("token");
        req.session.destroy();
        res.redirect('/web-nhanh');
     }
 }

 module.exports= new logoutController