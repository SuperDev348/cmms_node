const express = require('express');
const router = express.Router();
const moveController = require('../app/api/controllers/move');

router.get('/', moveController.getAll);
router.post('/', moveController.create);
router.get('/:moveId', moveController.getById);
router.get('/filter/:Id', moveController.getByFilterId);
router.put('/:moveId', moveController.updateById);
router.delete('/:moveId', moveController.deleteById);

module.exports = router;