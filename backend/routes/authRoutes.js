const express = require('express');
const { register, verifyEmail, adminLogin } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.get('/verify-email', verifyEmail);
router.post('/login/admin', adminLogin);

module.exports = router;
