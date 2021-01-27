const express = require('express');
const router = express.Router();
const assetconsumingreferenceController = require('../app/api/controllers/assetconsumingreference');

router.get('/', assetconsumingreferenceController.getAll);
router.post('/', assetconsumingreferenceController.create);
router.get('/:assetconsumingreferenceId', assetconsumingreferenceController.getById);
router.get('/filter/:Id', assetconsumingreferenceController.getByFilterId);
router.put('/:assetconsumingreferenceId', assetconsumingreferenceController.updateById);
router.delete('/:assetconsumingreferenceId', assetconsumingreferenceController.deleteById);

module.exports = router;