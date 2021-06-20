 class adminIndexController{
     show(req,res,err) {
         res.render('adminWiew/adminIndex')
     }
 }

 module.exports = new adminIndexController;