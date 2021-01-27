const express = require('express');
const router = express.Router();
const assetController = require('../app/api/controllers/assets');

router.get('/', assetController.getAll);
router.post('/', assetController.create);
router.post('/numberId', assetController.createNumberId);
router.get('/:assetId', assetController.getById);
router.get('/filter/:Id', assetController.getByFilterId);
router.put('/:assetId', assetController.updateById);
router.delete('/:assetId', assetController.deleteById);

module.exports = router;