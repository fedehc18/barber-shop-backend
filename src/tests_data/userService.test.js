const getUsersStub = async () => Promise.resolve([
    {
        "id": 1,
        "fullname": "Lucy gil",
        "password": "xxxx",
        "email": "lucy-29@hotmail.com",
        "role": "ADMIN"
    },
    {
        "id": 2,
        "fullname": "Mani herrera",
        "password": "xxx1",
        "email": "mani-24@hotmail.com",
        "role": "USER"
    },
    {
        "id": 3,
        "fullname": "Alana gil",
        "password": "xxx2",
        "email": "alana-18@hotmail.com",
        "role": "USER"
    },

])


const getUserStub = async () => Promise.resolve(
    {
        "id": 5,
        "fullname": "Fede Herrera",
        "password": "xxx4",
        "email": "fede-09@hotmail.com",
        "role": "USER"
    }
)

module.exports = { getUsersStub, getUserStub }