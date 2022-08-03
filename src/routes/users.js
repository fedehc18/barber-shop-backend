const express = require('express')
const router = express.Router();
const UsersService = require('../services/users')
const { successResponse, errorResponse, removePassword } = require('../utils');

const usersService = new UsersService()

router.post('/', async (req, res) => {
    try {
        const user = req.body
        let userCreated = await usersService.createUser(user)
        const response = removePassword(userCreated)
        successResponse(req, res, response)
    } catch (error) {
        errorResponse(req, res, error)
    }
})

router.get('/', async (req, res) => {
    try {
        const username = req.query.username

        if (username) {
            const userCreated = await usersService.getUserByUsername(username)
            const response = removePassword(userCreated)
            successResponse(req, res, response)
        } else {
            const usersCreated = await usersService.getUsers()
            const response = usersCreated.map(user => removePassword(user))
            successResponse(req, res, response)
        }
    } catch (error) {
        errorResponse(req, res, error)
    }
})

module.exports = router