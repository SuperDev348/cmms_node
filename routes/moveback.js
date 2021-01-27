const express = require('express');
const router = express.Router();
const movebackController = require('../app/api/controllers/moveback');

router.get('/', movebackController.getAll);
router.post('/', movebackController.create);
router.get('/:movebackId', movebackController.getById);
router.get('/filter/:Id', movebackController.getByFilterId);
router.put('/:movebackId', movebackController.updateById);
router.delete('/:movebackId', movebackController.deleteById);

module.exports = router;