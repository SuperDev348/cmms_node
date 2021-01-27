const express = require('express');
const router = express.Router();
const drillController = require('../app/api/controllers/drill');

router.get('/', drillController.getAll);
router.post('/', drillController.create);
 router.get('/:Id', drillController.getById);
 router.put('/:Id', drillController.updateById);
 router.delete('/:Id', drillController.deleteById);

module.exports = router;