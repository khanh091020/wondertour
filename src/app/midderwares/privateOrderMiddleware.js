const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
   const token = req.session.token
   if(!token) return res.status(400).json({
       success : false,
       message : 'Token is not found'
   })

  try {
    const decaded = jwt.verify(token.email,'mk')
    req.email = decaded
    next()
  } catch (error) {
      return res.status(400).json({
          sucess : false,
          message : 'Invalid token'
      })
  }
}

module.exports = checkToken