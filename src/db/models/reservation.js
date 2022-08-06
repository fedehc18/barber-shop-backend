const { Model, DataTypes } = require('sequelize')

const RESERVATION_TABLE = 'RESERVATIONS'

const ReservationSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    date: {
        allowNull: false,
        type: DataTypes.DATE
    },
    time: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
}

class ReservationModel extends Model {
    static associate() { }

    static config(sequelize) {
        return {
            sequelize,
            tableName: RESERVATION_TABLE,
            modelName: 'reservations',
            timestamps: false
        }
    }
}

module.exports = { RESERVATION_TABLE, ReservationSchema, ReservationModel }