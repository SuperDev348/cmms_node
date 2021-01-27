const express = require('express');
const router = express.Router();
const Controller = require('../app/api/controllers/assetevent');

router.get('/', Controller.getAll);
router.post('/', Controller.create);
 router.get('/:assetId', Controller.getAll);
 router.put('/:Id', Controller.updateById);
 router.delete('/:Id', Controller.deleteById);

module.exports = router;