class dang_ki_tiem_controller {
    // user
    // get
    show (req,res,next) {
      res.render('webnhanh/dangkitiem')
    }
}

module.exports = new dang_ki_tiem_controller;