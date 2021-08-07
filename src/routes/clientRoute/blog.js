const epress = require('express')
const router = epress.Router();
const commentController = require('../../app/controllers/blogController');

router.get('/',commentController.show)

module.exports = router