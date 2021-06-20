 const model = require('../controllers/models/tourMany');

 
 class deleteTour {
     delete(req,res,next) {
     model.delete({_id : req.params.id})
     .then(() => res.redirect('back'))
     .catch(next)
     }

     restore(req,res,next) {
        model.restore({_id : req.params.id}) 
        .then(() => res.redirect('back'))
        .catch(next)
    }

    deleteForce(req,res,next) {
        model.deleteOne({_id : req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }
 }

   

 module.exports = new deleteTour;