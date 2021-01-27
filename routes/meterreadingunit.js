const express = require('express');
const router = express.Router();
const MeterReadingUnitController = require('../app/api/controllers/meterreadingunit');

router.get('/', MeterReadingUnitController.getAll);
router.post('/', MeterReadingUnitController.create);
router.get('/:Id', MeterReadingUnitController.getById);
router.put('/:Id', MeterReadingUnitController.updateById);
router.delete('/:Id', MeterReadingUnitController.deleteById);

module.exports = router;