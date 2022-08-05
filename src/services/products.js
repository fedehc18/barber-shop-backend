const boom = require("@hapi/boom");
const { models } = require("../db/sequelize");

class ProductsService {
  async createProduct(product) {
    try {
      const productCreated = await models.products.create(product);
      return productCreated;
    } catch (error) {
      throw boom.internal(error.message);
    }
  }

  async getProducts() {
    try {
      return await models.products.findAll();
    } catch (error) {
      throw boom.internal(error.message);
    }
  }

  async getProductsById(productId) {
    try {
      return await models.products.findByPk(productId);
    } catch (error) {
      throw boom.internal(error.message);
    }
  }
}

module.exports = ProductsService;
