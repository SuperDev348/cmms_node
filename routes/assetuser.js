const express = require('express');
const router = express.Router();
const assetuserController = require('../app/api/controllers/assetuser');

router.get('/', assetuserController.getAll);
router.post('/', assetuserController.create);
router.get('/:Id', assetuserController.getAll);
router.get('/usergroup/:Id', assetuserController.getAllById);
router.put('/:Id', assetuserController.updateById);
router.delete('/:Id', assetuserController.deleteById);

module.exports = router;