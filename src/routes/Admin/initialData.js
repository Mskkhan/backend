const express = require('express');
// const { requireSignIn,adminMiddleware } = require('../../commonMiddleware');

const { initialData } = require('../../controller/admin/initialData');
const router = express.Router();


router.post('/initialdata',initialData);


module.exports = router;