const express = require('express');
const router  = express.Router();
const { signup } = require('../controllers/users');

router.post('/s', signup);

module.exports = router;