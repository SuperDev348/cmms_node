const express = require('express');
const router = express.Router();
const MeterReadingController = require('../app/api/controllers/meterreading');

router.get('/:Id', MeterReadingController.getAll);
router.post('/', MeterReadingController.create);
// router.get('/:Id', MeterReadingController.getById);
router.put('/:Id', MeterReadingController.updateById);
router.delete('/:Id', MeterReadingController.deleteById);

module.exports = router;