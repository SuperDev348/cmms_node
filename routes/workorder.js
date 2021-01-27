const express = require('express');
const router = express.Router();
const workorderController = require('../app/api/controllers/workorder');

router.get('/', workorderController.getAll);
router.post('/', workorderController.create);
 router.get('/:Id', workorderController.getById);
 router.put('/:Id', workorderController.updateById);
 router.delete('/:Id', workorderController.deleteById);

module.exports = router;