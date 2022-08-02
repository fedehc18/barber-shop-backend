const { Model, DataTypes } = require('sequelize')

const BARBER_TABLE = 'BARBERS'

const BarberSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    imageData: {
        allowNull: false,
        type: DataTypes.BLOB('long')
    },
    imageName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            len: [0, 200]
        }
    }
}

class BarberModel extends Model {
    static associate() { }

    static config(sequelize) {
        return {
            sequelize,
            tableName: BARBER_TABLE,
            modelName: 'barbers',
            timestamps: false
        }
    }
}

module.exports = { BARBER_TABLE, BarberSchema, BarberModel }