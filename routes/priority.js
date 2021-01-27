const express = require('express');
const router = express.Router();
const priorityController = require('../app/api/controllers/priority');

router.get('/', priorityController.getAll);
router.post('/', priorityController.create);
router.get('/:priorityId', priorityController.getById);
router.get('/filter/:Id', priorityController.getByFilterId);
router.put('/:priorityId', priorityController.updateById);
router.delete('/:priorityId', priorityController.deleteById);

module.exports = router;