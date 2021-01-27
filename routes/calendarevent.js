const express = require('express');
const router = express.Router();
const calendareventController = require('../app/api/controllers/calendarevent');

router.get('/', calendareventController.getAll);
router.post('/', calendareventController.create);
router.get('/:calendareventId', calendareventController.getById);
router.get('/filter/:Id', calendareventController.getByFilterId);
router.put('/:calendareventId', calendareventController.updateById);
router.delete('/:calendareventId', calendareventController.deleteById);

module.exports = router;