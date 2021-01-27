const express = require('express');
const router = express.Router();
const workordertaskController = require('../app/api/controllers/workordertask');

router.get('/workorder/:Id', workordertaskController.getAll);
router.post('/', workordertaskController.create);
 router.get('/:Id', workordertaskController.getById);
 router.put('/:Id', workordertaskController.updateById);
 router.delete('/:Id', workordertaskController.deleteById);

module.exports = router;