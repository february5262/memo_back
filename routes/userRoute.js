const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/api/user_info', UserController.getAll);
router.post('/api/user_info', UserController.create);


module.exports = router;