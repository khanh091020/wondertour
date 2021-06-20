const modal = require('../controllers/models/tourMany');

class checkBoxTourController {
    execute (req,res,next) {
  
   switch (req.body.action) {
       case 'delete':
        modal.delete({_id : {$in: req.body.tourIds}})
       .then(() =>  res.redirect('back'))
       .catch(next)
           break;
   
       default:
           res.send("<h1>404 ERROR<h1>")
           break;
   }
    }
}

module.exports = new checkBoxTourController;