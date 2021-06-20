const tour = require('./models/tourMany')

class filterController {

    //get list filter tour
    filterTour(req,res,next) {
    var Sprice;
    var Fprice;
    var search = req.query.searchByName;
    var index = 0;
    if(req.query.index) {
      index = (parseInt(req.query.index) - 1) *5;
    }
    if(!req.query.price)
    {
       Sprice = '0';
       Fprice = '5000';
    }
    else if(req.query.price === '200'){
        Sprice = '0';
        Fprice = '200';
    }
    else if(req.query.price === '500'){
        Sprice = '200';
        Fprice = '500';
    }
    else if(req.query.price === '1000'){
        Sprice = '500';
        Fprice = '1000';
    }
    else if(req.query.price === '2000'){
        Sprice = '1000';
        Fprice = '2000';
    }
    else if(req.query.price === '5000'){
        Sprice = '2000';
        Fprice = '5000';
    }

        var sort;  
        if(req.query.sortTour === '0') {
            sort = 
                {startDay : '1'}
            
        }
        if(req.query.sortTour === '2') {
          sort = {
              price : 'desc'
          }
        }
        else if(req.query.sortTour === '3') {
             sort = {
              price : 'desc'
          }
          }
        else if(req.query.sortTour === '1'){
            sort = {
                price : 'asc'
            }
        }
      
        Promise.all([tour.find({$and:[{price : {$gte : Sprice }},{price : {$lte : Fprice}},{$or : [{name :  new RegExp(search, 'i') },{cityDestination :  new RegExp(search, 'i') }]}]}).sort(sort).skip(index).limit(5),
                     tour.countDocuments({$and:[{price : {$gte : Sprice }},{price : {$lte : Fprice}},{$or : [{name :  new RegExp(search, 'i') },{cityDestination :  new RegExp(search, 'i') }]}]}) ])
          .then(([tours,count]) => {
            res.json({
                lists : tours,
                count : count,
                index : index
            })
          })
          .catch(next)

       
    }


}

module.exports = new filterController;