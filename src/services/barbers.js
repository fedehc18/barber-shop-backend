const boom = require("@hapi/boom");
const { models } = require("../db/sequelize");

class BarbersService {
    async createBarber(barber) {
        try {
            const barberCreated = await models.barbers.create(barber);
            return barberCreated;
        } catch (error) {
            throw boom.internal(error.message);
        }
    }

    async getbarbers() {
        try {
            return await models.barbers.findAll();
        } catch (error) {
            throw boom.internal(error.message);
        }
    }

    async getbarbersById(barberId) {
        try {
            return await models.barbers.findByPk(barberId);
        } catch (error) {
            throw boom.internal(error.message);
        }
    }
}

module.exports = BarbersService;
