const express = require('express');
const { register, verifyEmail, adminLogin,validateToken , logoutUser} = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.get('/verify-email', verifyEmail);
router.post('/login/admin', adminLogin);
router.post("/validateToken", validateToken);
router.post("/logout", logoutUser);

module.exports = router;
