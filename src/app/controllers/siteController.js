

class siteController{

    index(req,res) {
        res.render('others/about');
    }

    voice (req,res,next) {
        res.render('others/testVoiceSearch')
    }

   
}

module.exports =  new siteController;