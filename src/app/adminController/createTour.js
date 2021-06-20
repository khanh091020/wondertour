const tour = require('../controllers/models/tourMany');

class creatTour{

    show(req,res,next) {
        res.render('adminWiew/createTour');
    }

    async save(req,res,next) {
        req.body.img = 'image/'+ req.body.img ;
        req.body.img1 = 'image/'+ req.body.img1 ;
        req.body.img2 = 'image/'+ req.body.img2 ;
        req.body.img3 = 'image/'+ req.body.img3 ;
        const object = new tour(req.body);
        object.save()
      
        res.send(object);
    }
} 

module.exports = new creatTour;