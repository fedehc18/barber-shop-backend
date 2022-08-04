const { Model, DataTypes } = require("sequelize");

const PRODUCT_TABLE = "PRODUCTS";

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  imageUrl: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      len: [0, 200],
    },
  },
};

class ProductModel extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "products",
      timestamps: false,
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, ProductModel };
