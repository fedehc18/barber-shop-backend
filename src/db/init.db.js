//import schemas and models
const { UserModel, UserSchema } = require('./models/user')
const { BarberModel, BarberSchema } = require('./models/barber')
const { ReservationModel, ReservationSchema } = require('./models/reservation')

function setupModels(sequelize) {
    UserModel.init(UserSchema, UserModel.config(sequelize))
    BarberModel.init(BarberSchema, BarberModel.config(sequelize))
    ReservationModel.init(ReservationSchema, ReservationModel.config(sequelize))

    UserModel.hasMany(ReservationModel)
    ReservationModel.belongsTo(UserModel)

    BarberModel.hasMany(ReservationModel)
    ReservationModel.belongsTo(BarberModel)
}

module.exports = setupModels