const modal = require('../controllers/models/tourMany')
const {mongooseToObject} = require('../../util/mongoose')
class bookTourController {

    // get
    showOnline(req,res,next) {
        modal.findOne({slug : req.params.slug})
        .then(tour => {
            res.render('tour/bookTour',{
                tour : mongooseToObject(tour)
            });
        })
        .catch(next)
       
    }

    showDirect(req,res,next) {
        modal.findOne({slug : req.params.slug})
        .then(tour => {
            res.render('tour/bookTourDirect',{
                tour : mongooseToObject(tour)
            });
        })
        .catch(next)
    }
}

module.exports = new bookTourController;