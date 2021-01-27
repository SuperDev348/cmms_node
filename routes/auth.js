const express = require('express');
const router = express.Router();
const UserController = require('../app/api/controllers/users');
router.post('/register', UserController.create);
router.post('/login', UserController.login);
module.exports = router;