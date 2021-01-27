const express = require('express');
const router = express.Router();
const movebackassetController = require('../app/api/controllers/movebackasset');

router.get('/', movebackassetController.getAll);
router.post('/', movebackassetController.create);
router.get('/:movebackassetId', movebackassetController.getById);
router.get('/filter/:Id', movebackassetController.getByFilterId);
router.put('/:movebackassetId', movebackassetController.updateById);
router.delete('/:movebackassetId', movebackassetController.deleteById);

module.exports = router;