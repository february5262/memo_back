const express = require('express');
const UserController = require('../controllers/userController');
const MemoController = require('../controllers/memoController');

const router = express.Router();

router.get('/api/user_info', UserController.getAll);
router.post('/api/user_info', UserController.create);
router.get('/api/memo_content', MemoController.getAll);
router.post('/api/memo_content', MemoController.create);


module.exports = router;