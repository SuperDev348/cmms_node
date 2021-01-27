const express = require('express');
const router = express.Router();
const scheduledauditController = require('../app/api/controllers/scheduledaudit');

router.get('/', scheduledauditController.getAll);
router.post('/', scheduledauditController.create);
router.get('/:scheduledauditId', scheduledauditController.getById);
router.get('/filter/:Id', scheduledauditController.getByFilterId);
router.put('/:scheduledauditId', scheduledauditController.updateById);
router.delete('/:scheduledauditId', scheduledauditController.deleteById);

module.exports = router;