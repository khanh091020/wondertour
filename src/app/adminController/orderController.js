const order = require('../controllers/models/order')
class orderController {
     // put 
  // update status order cancel
   updateOrderStatus(req, res,next) {
    order.findByIdAndUpdate({_id : req.body.id},{status : 'canceled'})
    .then(() => {
      res.json({success: true, message: 'canceled'})
    })
    .catch(next)
  }
  updateOrderPaid (req,res,err) {
    order.findByIdAndUpdate({_id : req.body.id},{status : 'paid',paid : true})
    .then(() => {
      res.json({success: true, message: 'paid'})
    })
    .catch(err)
  }
 
}

module.exports = new orderController