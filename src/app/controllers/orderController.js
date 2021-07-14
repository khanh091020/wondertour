const order = require('./models/order')

class orderController {
  // post 
  // create order object
  async createOrder(req, res,next) {
    const {userName,phone,tourDate,tourID,
        photographer,check__photographer,singerTour,adultNumber,chilrenNumber,totalPrice}  = req.body
       
    if(!userName || !phone) return res.json({
        success: false,
        message: 'Please complete all information !'
    })
    req.body.userEmail = req.email
    req.body.singerTour = singerTour ? true : false
    req.body.photographer = check__photographer ? photographer : 'none'
    delete req.body.check__photographer
    try {
      await  order.create(req.body)
      res.send('success')
    } catch (error) {
      res.json({success: false, message: 'Error creating' ,error})
    }
    
  }
  
}

module.exports = new orderController