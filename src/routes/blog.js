const epress = require('express')
const router = epress.Router();
const commentController = require('../../src/app/controllers/blogController');

router.get('/',commentController.show)

module.exports = router