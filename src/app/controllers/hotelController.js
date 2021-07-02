class hotelController{
    showHotel(req,res,next) {
        res.render('others/hotel')
    }
    showFlight(req,res,next) {
        res.render('others/flight')
    }
}
module.exports = new hotelController