const express = require('express');
const router = express.Router();
const receiptController = require('../app/api/controllers/receipt');

router.get('/', receiptController.getAll);
router.post('/', receiptController.create);
router.get('/:receiptId', receiptController.getById);
router.get('/filter/:Id', receiptController.getByFilterId);
router.put('/:receiptId', receiptController.updateById);
router.delete('/:receiptId', receiptController.deleteById);

module.exports = router;