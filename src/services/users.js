const boom = require('@hapi/boom')
const { models } = require('../db/sequelize')
const bcrypt = require('bcrypt')

class UsersService {
    async createUser(user) {
        try {
            const hashedPassword = await bcrypt.hash(user.password, 14)
            const userCreated = await models.users.create({
                ...user,
                password: hashedPassword
            })
            return userCreated
        } catch (error) {
            throw boom.internal(error.message)
        }
    }

    async getUsers() {
        try {
            return await models.users.findAll()
        }
        catch (error) {
            throw boom.internal(error.message)
        }
    }

    async getUserByUsername(username) {
        try {
            return await models.users.findOne({
                where:
                {
                    email: username
                }
            })
        }
        catch (error) {
            throw boom.internal(error.message)
        }
    }
}

module.exports = UsersService