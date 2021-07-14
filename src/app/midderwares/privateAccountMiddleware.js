const jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
   const token = req.session.token
   if(!token) return res.redirect('/login.html')

  try {
    const decaded = jwt.verify(token,'mk')
    req.email = decaded.email
    next()
  } catch (error) {
      return res.json({
          sucess : false,
          message : 'Token access invalid !'
      })
  }
}

module.exports = checkToken