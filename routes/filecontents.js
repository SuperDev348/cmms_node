const express = require('express');
const router = express.Router();
const filecontentsController = require('../app/api/controllers/filecontents');

router.get('/', filecontentsController.getAll);
router.post('/', filecontentsController.create);
router.get('/:filecontentsId', filecontentsController.getById);
router.get('/filter/:Id', filecontentsController.getByFilterId);
router.put('/:filecontentsId', filecontentsController.updateById);
router.delete('/:filecontentsId', filecontentsController.deleteById);

module.exports = router;