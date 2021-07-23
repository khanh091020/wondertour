const bank = require('../controllers/models/back')

class partnershipController {
    showHome(req, res,next) 
    {
        res.render('partner/partnerIndex')
    }
    showRewiew (req,res,next) {
        res.render('partner/partnerRewiew')
    }
    showGeneralInfo (req,res,next) {
        res.render('partner/partnerGeneralInfo')
    }
    showPaymentInfo (req,res,next) {
        res.render('partner/partnerPaymentInfo')
    }
    showCreateRoomOptions (req,res,next) {
        res.render('partner/partnerCreateRoomOptions')
    }
    showCreatRommDetails (req,res,next) {
        res.render('partner/partnerCreatRommDetails')
    }
    showHotelManagament (req,res,next) {
        res.render('partner/hotelManagement')
    }
    // api get back
    getBanks(req,res,next)
    {
     bank.find({})
     .then(data => {
            res.json(data)
     })
     .catch(next)
    }
}

module.exports = new partnershipController