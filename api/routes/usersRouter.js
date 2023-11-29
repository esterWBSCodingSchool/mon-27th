const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController')
const { validateId, validateBody } = require('../validations/userValidation')
const { userExists } = require('../middlewares/userMiddleware')

const usersRouter = express.Router();

usersRouter.get('/', getUsers);

usersRouter.get('/:id', validateId, userExists, getUser);

usersRouter.post('/', validateBody, createUser);

usersRouter.put('/:id', validateId, validateBody, userExists, updateUser);

usersRouter.delete('/:id', validateId, userExists, deleteUser)

module.exports = usersRouter;