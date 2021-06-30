const tours = require('../controllers/models/tourMany');
const {mutipleMongooseTobject} = require('../../util/mongoose')
class accountControlller {
    showAccountDetail(req,res,next) {
        tours.find({})
        .then(list => {
            res.render('partials/accountCommon',{
                listSearch : mutipleMongooseTobject(list)
            });
        })
        .catch(next)
    }
}
module.exports = new accountControlller