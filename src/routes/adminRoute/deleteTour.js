const express = require('express');
const router = express.Router();
const controllers = require('../../app/adminController/deleteTourController');


router.patch('/:id/restore',controllers.restore)
router.delete('/:id/force',controllers.deleteForce)
router.delete('/:id',controllers.delete)

module.exports = router;