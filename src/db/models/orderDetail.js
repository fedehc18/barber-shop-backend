const { Model, DataTypes } = require("sequelize");

const ORDER_DETAIL_TABLE = "ORDERS_DETAILS";

const OrderDetailSchema = {
    quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
    }
};

class OrderDetailModel extends Model {
    static associate() { }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_DETAIL_TABLE,
            modelName: "orderDetail",
            timestamps: false,
        };
    }
}

module.exports = { ORDER_DETAIL_TABLE, OrderDetailSchema, OrderDetailModel };
