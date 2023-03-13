
const express = require('express');
const router = express.Router();
const rescontroller = require('./../controllers/Resource3Controller');





router.route('/').all(rescontroller.all);
module.exports=router;