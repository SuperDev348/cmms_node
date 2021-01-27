const express = require('express');
const router = express.Router();
const assetofflinetrackerController = require('../app/api/controllers/assetofflinetracker');

router.get('/', assetofflinetrackerController.getAll);
router.post('/', assetofflinetrackerController.create);
router.get('/:assetofflinetrackerId', assetofflinetrackerController.getById);
router.get('/filter/:Id', assetofflinetrackerController.getByFilterId);
router.put('/:assetofflinetrackerId', assetofflinetrackerController.updateById);
router.delete('/:assetofflinetrackerId', assetofflinetrackerController.deleteById);

module.exports = router;