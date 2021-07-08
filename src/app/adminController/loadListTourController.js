const model = require('../controllers/models/tourMany');
const {mutipleMongooseTobject}   = require('../../util/mongoose')
class loadListTourController {
    // get// show list tour not delete
    


    show(req,res,next) {
        let findList = model.find({});
        Promise.all([ findList.sortable(req),model.countDocumentsDeleted({})])
        .then(([lists,countDeleted]) =>  res.render('adminWiew/listAllTour',{
            listAll : mutipleMongooseTobject(lists),
            countDeleted,
        }))
   
    }

    show__deleted(req,res,next) {
        model.findDeleted({})
        .then(lists => {
            res.render('adminWiew/listTourTrash',{
                listAll : mutipleMongooseTobject(lists)
            })
        })
    }
}

module.exports = new loadListTourController;