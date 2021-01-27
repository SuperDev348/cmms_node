const express = require('express');
const router = express.Router();
const businessuserController = require('../app/api/controllers/businessuser');

router.get('/', businessuserController.getAll);
router.post('/', businessuserController.create);
router.get('/:Id', businessuserController.getAll);
router.get('/usergroup/:Id', businessuserController.getAllById);
router.put('/:Id', businessuserController.updateById);
router.delete('/:Id', businessuserController.deleteById);

module.exports = router;