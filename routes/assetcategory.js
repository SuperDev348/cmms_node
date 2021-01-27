const express = require('express');
const router = express.Router();
const assetcategoryController = require('../app/api/controllers/assetcategory');

router.get('/', assetcategoryController.getAll);
router.post('/', assetcategoryController.create);
// router.post('/numberId', assetcategoryController.createNumberId);
router.get('/:Id', assetcategoryController.getById);
router.put('/:Id', assetcategoryController.updateById);
router.delete('/:Id', assetcategoryController.deleteById);

module.exports = router;