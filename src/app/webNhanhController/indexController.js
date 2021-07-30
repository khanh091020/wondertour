const account = require('../controllers/models/account');
const index = require('./nhanhModal/index')
const { mutipleMongooseTobject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
class indexController {

    // get 
    // show index page
   showIndexPage(req,res,next) {
       console.log(req.session._id)
      account.find({}) 
      .then(list => {
          res.render('webnhanh/index', {
              list : mutipleMongooseTobject(list)
          })
      })
   }

   // create 
   // post
   create(req,res,next) {

   }

   // put 
   // update 
   update(req,res,next) {

   }

   // delete
   delete(req,res,next) {

   }

}

module.exports = new indexController;