const express = require('express');
const router = express.Router();
const businessclassificationController = require('../app/api/controllers/businessclassification');

router.get('/', businessclassificationController.getAll);
router.post('/', businessclassificationController.create);
router.get('/:businessclassificationId', businessclassificationController.getById);
router.get('/filter/:Id', businessclassificationController.getByFilterId);
router.put('/:businessclassificationId', businessclassificationController.updateById);
router.delete('/:businessclassificationId', businessclassificationController.deleteById);

module.exports = router;