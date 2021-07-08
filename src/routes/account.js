const epress = require('express')
const router = epress.Router();
const accountController = require('../../src/app/controllers/accountController');

router.get('/details',accountController.showAccountDetail)
router.get('/my-tour',accountController.showAccountLove)
router.get('/my-photographer',accountController.showAccountLove)
router.get('/love-tour',accountController.showAccountLove)


module.exports = router