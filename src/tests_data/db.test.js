const { getUsersStub, getUserStub } = require("./userService.test")

const modelsData = {
    users: {
        async findAll() {
            return Promise.resolve(getUsersStub())
        },
        async findOne() {
            return Promise.resolve(getUserStub())
        },
        async create(user) {
            return Promise.resolve(getUserStub())
        }
    }
}

module.exports = { modelsData }