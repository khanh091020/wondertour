

class siteController{

    index(req,res) {
        res.render('others/about');
    }

    showLiveChat(req,res,next) {
        res.render("webnhanh/testChatSocket")
    }

   
}

module.exports =  new siteController;