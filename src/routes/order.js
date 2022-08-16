const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();
const OrdersService = require('../services/orders')
const { successResponse, errorResponse } = require('../utils');

const ordersService = new OrdersService()

router.post('/', verifyToken, async (req, res) => {
    try {
        const orderRequest = req.body
        orderRequest.userId = req.user.id
        const orderCreated = await ordersService.createOrder(orderRequest)
        successResponse(req, res, orderCreated)
    } catch (error) {
        errorResponse(req, res, error)
    }
})

router.get('/', verifyToken, async (req, res) => {
    try {
        const userId = req.user.id
        const orders = await ordersService.getOrdersByUserId(userId)
        successResponse(req, res, orders)
    } catch (error) {
        errorResponse(req, res, error)
    }
})

router.delete('/:id', verifyToken, async (req, res) => {
    try {

        const response = await ordersService.cancelOrder(req.params.id)
        successResponse(req, res, response)
    } catch (error) {
        errorResponse(req, res, error)
    }
})

module.exports = router