const express = require('express');
const router = express.Router();

// controllers
const userController = require('../controllers/user.controller');


// routes
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.post('/user/create', userController.createUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);




module.exports = router
