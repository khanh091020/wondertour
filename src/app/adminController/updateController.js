const model = require('../controllers/models/tourMany');
const {mongooseToObject}   = require('../../util/mongoose')
class updateController {
    show(req,res,next) {
    model.findById(req.params.id)
    .then(tour => {
        res.render("adminWiew/updateTour"
        ,
        {
            tour : mongooseToObject(tour)
        }
        )
    })
    .catch(next)
    
    }

    //put

    save(req,res,next) {
     model.updateOne({_id : req.params.id},req.body)
     .then(() => res.redirect('/admin/all-list'))
     .catch(next)
       }
}

module.exports = new updateController;