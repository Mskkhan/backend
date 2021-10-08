const express = require('express');
const { requireSignIn } = require('../../commonMiddleware');

const { signup, signin, signout } =require('../../controller/Admin/auth');
const { validatSignInRequest, isRequestValidated,validatSignUpRequest } = require('../../validator/auth');
const router = express.Router();



router.post('/Admin/signin',validatSignInRequest,isRequestValidated, signin);

router.post('/Admin/signup', validatSignUpRequest,isRequestValidated, signup); 

router.post('/Admin/signout',signout)



module.exports = router;