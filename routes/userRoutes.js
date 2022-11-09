const express = require('express');
const router = express.Router();
const user = require('../controller/userController');
const validation = require('../validation/user/user_validation')
const mail=require('../controller/userController')

router.post('/registerUser',validation.registerUserValidation ,user.userSignup,);
router.get('/send',mail.sendMail)
module.exports = router;