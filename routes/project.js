const express = require('express');
const router = express.Router();
const projectController = require('../app/api/controllers/project');

 router.get('/', projectController.getAll);
 router.post('/', projectController.create);
 router.get('/:Id', projectController.getById);
 router.put('/:Id', projectController.updateById);
 router.delete('/:Id', projectController.deleteById);

module.exports = router;