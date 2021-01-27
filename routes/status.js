const express = require('express');
const router = express.Router();
const statusController = require('../app/api/controllers/status');

router.get('/', statusController.getAll);
router.post('/', statusController.create);
 router.get('/:Id', statusController.getById);
 router.put('/:Id', statusController.updateById);
 router.delete('/:Id', statusController.deleteById);

module.exports = router;