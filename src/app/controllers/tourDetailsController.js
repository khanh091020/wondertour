const { mongooseToObject } = require('../../util/mongoose');
const tourr = require("./models/tourMany") 
const { mutipleMongooseTobject } = require('../../util/mongoose');
const comment = require('./models/comment')
class tourDetailsController {

   async index(req,res,next) {
     var listComment;

     Promise.all([tourr.findOne({slug : req.params.slug}) ,comment.find({slugTour : req.params.slug}).sort({createdAt : 'desc'}),comment.countDocuments({slugTour : req.params.slug})])
     .then(([object,commentList,count]) => {
      res.render('tour/toursdetail',
        {
          object : mongooseToObject(object),
          commentList : mutipleMongooseTobject(commentList),
          count : count
        })
     })
     .catch(next)
   
  
    }
}

module.exports = new tourDetailsController;