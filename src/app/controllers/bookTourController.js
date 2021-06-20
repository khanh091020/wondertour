class bookTourController {

    // get
    showOnline(req,res,next) {
        res.render('tour/bookTour');
    }

    showDirect(req,res,next) {
        res.render('tour/bookTourDirect');
    }
}

module.exports = new bookTourController;