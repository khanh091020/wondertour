const order = require('./models/order')

class orderController {
  // post 
  // create order object
  async createOrder(req, res,next) {
    const {userName,phone,tourDate,tourID,
        photographer,check__photographer,singerTour,adultNumber,chilrenNumber,totalPrice,status}  = req.body
       
    if(!userName || !phone) return res.json({
        success: false,
        message: 'Please complete all information !'
    })
    req.body.userEmail = req.email
    req.body.singerTour = singerTour ? true : false
    req.body.photographer = check__photographer ? photographer : 'none'
    req.body.status = status ? status : 'unpaid'
    delete req.body.check__photographer
    try {
      await  order.create(req.body)
      res.send('success')
    } catch (error) {
      res.json({success: false, message: 'Error creating' ,error})
    }
    
  }

  // put 
  // update status order cancel
  async updateOrderStatus(req, res,next) {
    try {
      await order.findOneAndUpdate({userEmail:req.email,_id : req.body.id},{status : 'canceled'})
      res.json({success: true, message: 'canceled',link : '/account/my-tour'})
    } catch (error) {
      
    }
  }
  
}

module.exports = new orderController