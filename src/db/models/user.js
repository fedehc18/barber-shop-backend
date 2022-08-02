const { Model, DataTypes } = require('sequelize')

const USER_TABLE = 'USERS'

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    fullName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: true,
        unique: true,
        type: DataTypes.STRING,
    },
    Role: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            isIn: [['ADMIN', 'USER']]
        },
        defaultValue: 'USER'
    },
}

class UserModel extends Model {
    static associate() { }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'users',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, UserSchema, UserModel }