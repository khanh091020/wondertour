const modal = require('../controllers/models/tourMany')
const {mongooseToObject} = require('../../util/mongoose')
const {mutipleMongooseTobject} = require('../../util/mongoose')
const photographer = require('../controllers/models/photographer')
class bookTourController {

    // get
    showOnline(req,res,next) {
        Promise.all([ modal.findOne({slug : req.params.slug}),photographer.find({})])
        .then(([tour,lists]) => {
            res.render('tour/bookTour',{
                        tour : mongooseToObject(tour),
                        photographers : mutipleMongooseTobject(lists)
                    });
        })
        .catch(next)
       
    }

    showDirect(req,res,next) {
        Promise.all([ modal.findOne({slug : req.params.slug}),photographer.find({})])
        .then(([tour,lists]) => {
            res.render('tour/bookTourDirect',{
                        tour : mongooseToObject(tour),
                        photographers : mutipleMongooseTobject(lists)
                    });
        })
        .catch(next)
       
    }
}

module.exports = new bookTourController;