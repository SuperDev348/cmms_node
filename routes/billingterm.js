const express = require('express');
const router = express.Router();
const billingtermController = require('../app/api/controllers/billingterm');

router.get('/', billingtermController.getAll);
router.post('/', billingtermController.create);
router.get('/:billingtermId', billingtermController.getById);
router.get('/filter/:Id', billingtermController.getByFilterId);
router.put('/:billingtermId', billingtermController.updateById);
router.delete('/:billingtermId', billingtermController.deleteById);

module.exports = router;