const cityDestination = require('./models/cityDestination')
const {mutipleMongooseTobject} = require('../../util/mongoose')
class homeController{

    index(req,res,next) {
         cityDestination.find({})
         .then(cityDestinations => {
            res.render('home', {
                cityDestinations : mutipleMongooseTobject(cityDestinations)
            });
         })
         .catch(next)
       
    }

    
}

module.exports =  new homeController;