const photographer = require('./models/photographer')
const {mutipleMongooseTobject} = require('../../util/mongoose')
const {mongooseToObject} = require('../../util/mongoose')
class photographerController {
    
    show(req,res,next) {
    //     const add = {id : 4,
    //         img : 'image/Aleksandra.jpg',
    //         img1 : 'https://www.localgrapher.com/wp-content/uploads/2019/02/IMG_4214-800x400.jpg',
    //         img2 : 'https://www.localgrapher.com/wp-content/uploads/2019/02/IMG_4265-1920x800.jpg',
    //         img3 : 'https://www.localgrapher.com/wp-content/uploads/2019/02/IMG_3903-1920x800.jpg'
    //         ,firstName : 'John',lastName : 'Aleksandra',
    //    style : 'I don’t want to just give you photos, I want to give you works that communicate the essence of who you are, that tell stories beyond what you see.',
    //    like : 'I love old Vespa scooters, dogs and old buildings.',
    //    address : 'Ha noi city',
    //    language : 'English, Russian and Lithuanian',
    //    age : 25,
    //    slug : 'aleksandra'
    // }

      photographer.find({})
      .then(list => {
        res.render('photographer', {
            photographers : mutipleMongooseTobject(list)
        });
      })
      .catch(next)
        
    }

    showDetails(req,res,next) {
      photographer.findOne({slug : req.params.slug})
      .then(item => {
         res.render('photographerDetails', {
           item : mongooseToObject(item)
         })
      })
      .catch(next)
    }
}

module.exports = new photographerController;