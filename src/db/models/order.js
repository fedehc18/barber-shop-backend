const { Model, DataTypes } = require("sequelize");

const ORDER_TABLE = "ORDERS";

const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  price: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
};

class OrderModel extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: "orders",
      timestamps: false,
    };
  }
}

module.exports = { ORDER_TABLE, OrderSchema, OrderModel };
