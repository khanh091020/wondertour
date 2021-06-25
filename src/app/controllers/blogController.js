class blogController {
    show(req,res,next) {
        res.render('blog');
    }
}

module.exports = new blogController;