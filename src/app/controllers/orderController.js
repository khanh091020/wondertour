const order = require('./models/order')

class orderController {
  // post 
  // create order object
  createOrder(req, res,next) {
    const {userName,phone,userEmail,tourDate,tourID,
        photographer,singerTour,adultNumber,childrenNumber,totalPrice}  = req.body
    if(!userName || !phone) return res.status(400).json({
        success: false,
        message: 'Please enter enough information'
    })

    order.create(req.body)
    .then()
    .catch(err => {
        return res.status(400).json({success:false, message : 'Internal server error'})
    })
  }
  
}

module.exports = new orderController