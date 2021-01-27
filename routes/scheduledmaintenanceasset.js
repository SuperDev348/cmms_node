const express = require('express');
const router = express.Router();
const scheduledmaintenanceassetController = require('../app/api/controllers/scheduledmaintenanceasset');

router.get('/', scheduledmaintenanceassetController.getAll);
router.post('/', scheduledmaintenanceassetController.create);
router.get('/:scheduledmaintenanceassetId', scheduledmaintenanceassetController.getById);
router.get('/filter/:Id', scheduledmaintenanceassetController.getByFilterId);
router.put('/:scheduledmaintenanceassetId', scheduledmaintenanceassetController.updateById);
router.delete('/:scheduledmaintenanceassetId', scheduledmaintenanceassetController.deleteById);

module.exports = router;