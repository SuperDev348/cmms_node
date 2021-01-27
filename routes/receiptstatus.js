const express = require('express');
const router = express.Router();
const receiptstatusController = require('../app/api/controllers/receiptstatus');

router.get('/', receiptstatusController.getAll);
router.post('/', receiptstatusController.create);
router.get('/:receiptstatusId', receiptstatusController.getById);
router.get('/filter/:Id', receiptstatusController.getByFilterId);
router.put('/:receiptstatusId', receiptstatusController.updateById);
router.delete('/:receiptstatusId', receiptstatusController.deleteById);

module.exports = router;