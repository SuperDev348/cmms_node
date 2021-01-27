const express = require('express');
const router = express.Router();
const scheduleddrillController = require('../app/api/controllers/scheduleddrill');

router.get('/', scheduleddrillController.getAll);
router.post('/', scheduleddrillController.create);
 router.get('/:Id', scheduleddrillController.getById);
 router.put('/:Id', scheduleddrillController.updateById);
 router.delete('/:Id', scheduleddrillController.deleteById);

module.exports = router;