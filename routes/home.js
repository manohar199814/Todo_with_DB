const express = require('express');

const homeController = require('../controllers/home_controller');

const router = express.Router();


//home route to render home page
router.get('/',homeController.renderHome);

//post rquest of todo item to add one item
router.post('/',homeController.postToDoItem);

//delete request of todo item
router.get('/delete',homeController.deleteTodoItem);

//when input is checked on UI this is to update database, checked field of todo item
router.post('/check/:id',homeController.checkTODoItem)

module.exports = router;