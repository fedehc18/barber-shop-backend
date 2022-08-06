const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();
const ReservationsService = require('../services/reservations')
const { successResponse, errorResponse, removePassword } = require('../utils');

const reservationsService = new ReservationsService()

const TIMES = [10, 11, 12, 13, 14, 15, 16]

router.post('/', verifyToken, async (req, res) => {
    try {
        const reservation = req.body
        reservation.userId = req.user.id
        let reservationCreated = await reservationsService.createReservation(reservation)
        successResponse(req, res, reservationCreated)
    } catch (error) {
        errorResponse(req, res, error)
    }
})

router.get('/pending', verifyToken, async (req, res) => {
    try {
        const userId = req.user.id
        const reservationsPending = await reservationsService.getPendingReservationsByUserId(userId)
        successResponse(req, res, reservationsPending)
    } catch (error) {
        errorResponse(req, res, error)
    }
})

router.get('/hours', verifyToken, async (req, res) => {
    try {
        const response = await reservationsService.getTimeAvailableByDate(req.query.date, req.query.barberId)

        const timeavailable = TIMES.filter(time => response.indexOf(time) == -1)
        successResponse(req, res, timeavailable)
    } catch (error) {
        errorResponse(req, res, error)
    }
})

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const response = await reservationsService.removeReservationById(req.params.id)
        successResponse(req, res, response)
    } catch (error) {
        errorResponse(req, res, error)
    }
})

module.exports = router