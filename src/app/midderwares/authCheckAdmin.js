const account = require('../controllers/models/account')
const checkAdmin = (req, res, next) => {
   
 account.findOne({_id : req.id})
 .then(user => {
    
    if(user.admin !== true)  return res.json({message : "You don't have admin role to access"});
    next()
 }) 
 .catch(err => {
     res.json({ 
         message : "Server error !"
     })
 })

}
module.exports = checkAdmin;