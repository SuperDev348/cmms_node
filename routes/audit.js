const express = require('express');
const router = express.Router();
const auditController = require('../app/api/controllers/audit');

router.get('/', auditController.getAll);
router.post('/', auditController.create);
router.get('/:auditId', auditController.getById);
router.get('/filter/:Id', auditController.getByFilterId);
router.put('/:auditId', auditController.updateById);
router.delete('/:auditId', auditController.deleteById);

module.exports = router;