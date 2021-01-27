const express = require('express');
const router = express.Router();
const workorderuserController = require('../app/api/controllers/workorderuser');

router.get('/', workorderuserController.getAll);
router.post('/', workorderuserController.create);
router.get('/:workorderuserId', workorderuserController.getById);
router.get('/filter/:Id', workorderuserController.getByFilterId);
router.put('/:workorderuserId', workorderuserController.updateById);
router.delete('/:workorderuserId', workorderuserController.deleteById);

module.exports = router;