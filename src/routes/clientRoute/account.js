const epress = require('express')
const router = epress.Router();
const accountController = require('../../app/controllers/accountController');

router.get('/details',accountController.showAccountDetail)
router.get('/my-tour',accountController.showOrders)
router.get('/my-photographer',accountController.showAccountLove)
router.get('/love-tour',accountController.showAccountLove)


module.exports = router