 class logoutController {
     logout(req,res,next) {
        res.clearCookie("token");
        res.redirect('/index.html')
     }
 }

 module.exports= new logoutController