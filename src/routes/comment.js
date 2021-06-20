const epress = require('express')
const router = epress.Router();
const commentController = require('../../src/app/controllers/commentController');

router.post('/',commentController.create)

module.exports = router