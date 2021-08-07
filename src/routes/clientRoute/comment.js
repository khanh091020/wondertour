const epress = require('express')
const router = epress.Router();
const commentController = require('../../app/controllers/commentController');

router.post('/',commentController.create)

module.exports = router