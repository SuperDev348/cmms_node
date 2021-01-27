const express = require('express');
const router = express.Router();
const businessgroupController = require('../app/api/controllers/businessgroup');

router.get('/', businessgroupController.getAll);
router.post('/', businessgroupController.create);
router.get('/:businessgroupId', businessgroupController.getById);
router.get('/filter/:Id', businessgroupController.getByFilterId);
router.put('/:businessgroupId', businessgroupController.updateById);
router.delete('/:businessgroupId', businessgroupController.deleteById);

module.exports = router;