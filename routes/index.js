const express = require('express');
const router = express.Router();

// controllers
const userController = require('../controllers/user.controller');


// routes
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);




module.exports = router
