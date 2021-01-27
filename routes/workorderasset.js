const express = require('express');
const router = express.Router();
const workorderassetController = require('../app/api/controllers/workorderasset');

router.get('/', workorderassetController.getAll);
router.post('/', workorderassetController.create);
router.get('/:workorderassetId', workorderassetController.getById);
router.get('/filter/:Id', workorderassetController.getByFilterId);
router.put('/:workorderassetId', workorderassetController.updateById);
router.delete('/:workorderassetId', workorderassetController.deleteById);

module.exports = router;