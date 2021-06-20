const Tour = require('./models/tourMany');
const { mutipleMongooseTobject } = require('../../util/mongoose');
class outTourController{

    index(req,res,next) {
        Tour.find({})
        .then(tours => {
          
            res.render('ourTour',{
            tours : mutipleMongooseTobject(tours)
                      });
        }
            
          
        )
        .catch(err => next(err));
        
    
       
    }
}

module.exports =  new outTourController;