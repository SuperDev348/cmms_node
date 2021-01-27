const express = require('express');
const router = express.Router();
const fileController = require('../app/api/controllers/file');

router.get('/', fileController.getAll);
router.post('/', fileController.create);
router.get('/:fileId', fileController.getById);
router.get('/filter/:Id', fileController.getByFilterId);
router.put('/:fileId', fileController.updateById);
router.delete('/:fileId', fileController.deleteById);

module.exports = router;