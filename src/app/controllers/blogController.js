class blogController {
    show(req,res,next) {
        res.render('others/blog');
    }
}

module.exports = new blogController;