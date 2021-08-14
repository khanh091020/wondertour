const tour = require('../controllers/models/tourMany');

class creatTour{

    show(req,res,next) {
        res.render('adminWiew/createTour');
    }

    async save(req,res,next) {
     
        tour.create(req.body)
        res.redirect('/admin/createTour')
    }

} 

module.exports = new creatTour;