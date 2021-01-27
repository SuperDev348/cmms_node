const express = require('express');
const router = express.Router();
const maintenancetypeController = require('../app/api/controllers/maintenancetype');

router.get('/', maintenancetypeController.getAll);
router.post('/', maintenancetypeController.create);
router.get('/:maintenancetypeId', maintenancetypeController.getById);
router.get('/filter/:Id', maintenancetypeController.getByFilterId);
router.put('/:maintenancetypeId', maintenancetypeController.updateById);
router.delete('/:maintenancetypeId', maintenancetypeController.deleteById);

module.exports = router;