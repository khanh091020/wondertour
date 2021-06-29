const cityDestination = require('./models/cityDestination')
const tour = require('./models/tourMany')
const {mutipleMongooseTobject} = require('../../util/mongoose')
class homeController{

    index(req,res,next) {
         
        Promise.all([cityDestination.find({}),tour.find({})])
        .then(([cityDestinations,tours]) => {
            res.render('others/home', {
                cityDestinations : mutipleMongooseTobject(cityDestinations),
                tours : mutipleMongooseTobject(tours)
            });
        })
        .catch(next)

        //  cityDestination.find({})
        //  .then(cityDestinations => {
        //     res.render('home', {
        //         cityDestinations : mutipleMongooseTobject(cityDestinations)
        //     });
        //  })
        //  .catch(next)
       
    }

    
}

module.exports =  new homeController;