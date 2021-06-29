class accountControlller {
    showAccountDetail(req,res,next) {
        res.render('partials/accountCommon');
    }
}
module.exports = new accountControlller