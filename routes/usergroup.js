const express = require('express');
const router = express.Router();
const usergroupController = require('../app/api/controllers/usergroup');

router.get('/', usergroupController.getAll);
router.post('/', usergroupController.create);
 router.get('/:Id', usergroupController.getById);
 router.put('/:Id', usergroupController.updateById);
 router.delete('/:Id', usergroupController.deleteById);

module.exports = router;