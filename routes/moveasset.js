const express = require('express');
const router = express.Router();
const moveassetController = require('../app/api/controllers/moveasset');

router.get('/', moveassetController.getAll);
router.post('/', moveassetController.create);
router.get('/:moveassetId', moveassetController.getById);
router.get('/filter/:Id', moveassetController.getByFilterId);
router.put('/:moveassetId', moveassetController.updateById);
router.delete('/:moveassetId', moveassetController.deleteById);

module.exports = router;