const express = require('express');
const router = express.Router();
const scheduledmaintenancepartController = require('../app/api/controllers/scheduledmaintenancepart');

router.get('/', scheduledmaintenancepartController.getAll);
router.post('/', scheduledmaintenancepartController.create);
router.get('/:scheduledmaintenancepartId', scheduledmaintenancepartController.getById);
router.get('/filter/:Id', scheduledmaintenancepartController.getByFilterId);
router.put('/:scheduledmaintenancepartId', scheduledmaintenancepartController.updateById);
router.delete('/:scheduledmaintenancepartId', scheduledmaintenancepartController.deleteById);

module.exports = router;