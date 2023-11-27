const express = require('express');
const { getUsers, getUser } = require('../controllers/userController')
const { validateId, validateBodyPost } = require('../validations/userValidation')
const { userExists } = require('../middlewares/userMiddleware')

const usersRouter = express.Router();

usersRouter.get('/', getUsers);

usersRouter.get('/:id', validateId, userExists, getUser)


module.exports = usersRouter;