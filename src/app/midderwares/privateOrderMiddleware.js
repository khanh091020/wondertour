const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
   const token = req.session.token
   if(!token) return res.json({
     success: false,
     message: 'Please login to order this tour !'
   })

  try {
    const decaded = jwt.verify(token,'mk')
    req.email = decaded.email
     req.id = req.session._id
    next()
  } catch (error) {
      return res.json({
          sucess : false,
          message : 'Token access invalid !'
      })
  }
}

module.exports = checkToken