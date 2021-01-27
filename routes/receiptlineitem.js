const express = require('express');
const router = express.Router();
const receiptlineitemController = require('../app/api/controllers/receiptlineitem');

router.get('/', receiptlineitemController.getAll);
router.post('/', receiptlineitemController.create);
router.get('/:receiptlineitemId', receiptlineitemController.getById);
router.get('/filter/:Id', receiptlineitemController.getByFilterId);
router.put('/:receiptlineitemId', receiptlineitemController.updateById);
router.delete('/:receiptlineitemId', receiptlineitemController.deleteById);

module.exports = router;