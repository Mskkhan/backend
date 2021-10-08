const express = require('express');

const { signup, signin } =require('../controller/auth');
const { validatSignInRequest, isRequestValidated,validatSignUpRequest } = require('../validator/auth');

const router = express.Router();


router.post('/signin', validatSignInRequest,isRequestValidated, signin); 

router.post('/signup',validatSignUpRequest,isRequestValidated, signup);






module.exports = router;