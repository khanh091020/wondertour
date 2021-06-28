const comment = require('./models/comment')
const cookie = require('cookie-parser');
const jwt = require('jsonwebtoken');
const account = require('./models/account');
const { count } = require('./models/comment');
class commentController{
    // post
    create(req,res,next) {
      
    var token = req.session.token;
    if(!token) {
      return res.json({
        link : '/login.html'
      });
    }

    Promise.all([account.findOne({_id : jwt.verify(token,'mk')._id}),comment.countDocuments({slugTour : req.body.slugTour})])
    .then(([account,count]) => {
      req.body.nameAccount = account.lastName 
    req.body.accountID = account._id
    req.body.count = count
    comment.create(req.body)
    res.json(req.body)
    })
    .catch(() => {
      return res.json({
        link : '/login.html'
      });
    })
   
  
   
}
}

module.exports = new commentController;