

class siteController{

    index(req,res) {
        res.render('about');
    }

   
}

module.exports =  new siteController;