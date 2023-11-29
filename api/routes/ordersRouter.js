const express = require('express');
const { getOrders, getOrder, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController')
const { validateId, validateBody } = require('../validations/orderValidation')
const { orderExists } = require('../middlewares/orderMiddleware')

const ordersRouter = express.Router();

ordersRouter.get('/', getOrders);

ordersRouter.get('/:id', validateId, orderExists, getOrder);

ordersRouter.post('/', validateBody, createOrder);

ordersRouter.put('/:id', validateId, validateBody, orderExists, updateOrder);

ordersRouter.delete('/:id', validateId, orderExists, deleteOrder)

module.exports = ordersRouter;