const express = require('express');
const router = express.Router();
const SMController = require('../app/api/controllers/scheduledmaintenance');

router.get('/', SMController.getAll);
router.post('/', SMController.create);
// router.post('/numberId', SMController.createNumberId);
router.get('/:Id', SMController.getById);
router.put('/:Id', SMController.updateById);
router.delete('/:Id', SMController.deleteById);

module.exports = router;