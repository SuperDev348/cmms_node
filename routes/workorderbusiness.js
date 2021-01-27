const express = require('express');
const router = express.Router();
const workorderbusinessController = require('../app/api/controllers/workorderbusiness');

router.get('/', workorderbusinessController.getAll);
router.post('/', workorderbusinessController.create);
router.get('/:workorderbusinessId', workorderbusinessController.getById);
router.get('/filter/:Id', workorderbusinessController.getByFilterId);
router.put('/:workorderbusinessId', workorderbusinessController.updateById);
router.delete('/:workorderbusinessId', workorderbusinessController.deleteById);

module.exports = router;