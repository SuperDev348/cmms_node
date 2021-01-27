const express = require('express');
const router = express.Router();
const movestatusController = require('../app/api/controllers/movestatus');

router.get('/', movestatusController.getAll);
router.post('/', movestatusController.create);
router.get('/:movestatusId', movestatusController.getById);
router.get('/filter/:Id', movestatusController.getByFilterId);
router.put('/:movestatusId', movestatusController.updateById);
router.delete('/:movestatusId', movestatusController.deleteById);

module.exports = router;