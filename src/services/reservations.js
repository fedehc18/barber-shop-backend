const boom = require('@hapi/boom')
const { models } = require('../db/sequelize')
const { Op } = require("sequelize");

class ReservationsService {
    async createReservation(reservation) {
        try {
            const reservationCreated = await models.reservations.create(reservation)
            return reservationCreated
        } catch (error) {
            throw boom.internal(error.message)
        }
    }

    async getPendingReservationsByUserId(userId) {
        try {
            return await models.reservations.findAll({
                where:
                {
                    userId: userId,
                    date: { [Op.gt]: new Date() }
                },
                include: models.barbers
            })
        }
        catch (error) {
            throw boom.internal(error.message)
        }
    }

    async removeReservationById(id) {
        try {
            return await models.reservations.destroy({
                where:
                {
                    id: id
                }
            })
        }
        catch (error) {
            throw boom.internal(error.message)
        }
    }

    async getTimeAvailableByDate(date, barberId) {
        try {
            const [results, metadata] = await models.reservations.sequelize.query(`SELECT "time" FROM "RESERVATIONS" where CAST("date" AS DATE) = CAST('${date}' AS DATE) and "barberId" = ${barberId}`)
            const timeavailable = results.map(json => json.time)
            return timeavailable
        } catch (error) {
            throw boom.internal(error.message)
        }
    }
}

module.exports = ReservationsService