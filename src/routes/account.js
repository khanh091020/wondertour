const epress = require('express')
const router = epress.Router();
const accountController = require('../../src/app/controllers/accountController');

router.get('/details',accountController.showAccountDetail)

module.exports = router