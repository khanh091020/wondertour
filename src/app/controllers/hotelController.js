class hotelController{
    showHotel(req,res,next) {
        res.render('hotel/hotel')
    }
    showFlight(req,res,next) {
        res.render('flight/flight')
    }

    // get 
    showHotelDetails(req,res,next) {
        res.render('hotel/hotelDetails')
    }
}
module.exports = new hotelController