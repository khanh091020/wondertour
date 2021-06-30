const epress = require('express')
const router = epress.Router();
const accountController = require('../../src/app/controllers/accountController');

router.get('/details',accountController.showAccountDetail)
router.get('/my-tour',accountController.showAccountDetail)
router.get('/my-photographer',accountController.showAccountDetail)
router.get('/love-tour',accountController.showAccountDetail)


module.exports = router