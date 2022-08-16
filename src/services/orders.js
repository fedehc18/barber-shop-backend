const boom = require("@hapi/boom");
const { models } = require("../db/sequelize");
const ProductsService = require("./products");
const moment = require("moment")

const productsService = new ProductsService();

class OrdersService {

    async createOrder(orderRequest) {
        try {
            const shippingDay = moment().add(7, 'days').format("DD/MM/YYYY");
            const orderCreated = await models.orders.create({ userId: orderRequest.userId, price: parseFloat(orderRequest.price), shippingDay: shippingDay });

            await Promise.all(
                orderRequest.products.map(async productRequest => {

                    const product = await productsService.getProductsById(productRequest.productId)

                    await orderCreated.addProduct(product, { through: { quantity: productRequest.quantity } })
                })
            )

            const result = await models.orders.findOne({
                where: { id: orderCreated.id },
                include: models.products
            })

            return result;
        } catch (error) {
            throw boom.internal(error.message);
        }
    }

    async getOrdersByUserId(userId) {
        try {

            const result = await models.orders.findAll({
                where: { userId: userId },
                include: models.products
            })

            const orders = result.map(order => {
                const products = order.products.map(product => {
                    const text = `${product.name} x${product.orderDetail.quantity}`
                    return text
                })
                const today = moment()
                const shippingDay = moment(order.shippingDay, "DD/MM/YYYY")
                const isCancelable = moment(today).isBefore(shippingDay)

                return {
                    id: order.id,
                    price: order.price,
                    date: order.shippingDay,
                    products: products,
                    isCancelable: isCancelable
                }
            })

            return orders;
        } catch (error) {
            throw boom.internal(error.message);
        }
    }

    async cancelOrder(orderId) {
        let order

        try {
            order = await models.orders.findByPk(orderId)
        } catch (error) {
            throw boom.internal(error.message);
        }

        const today = moment()
        const shippingDay = moment(order.shippingDay, "DD/MM/YYYY")
        if (!moment(today).isBefore(shippingDay)) {
            throw boom.badRequest("Solo se pueden cancelar pedidos con un dia de anticipación");
        }

        try {
            return await models.orders.destroy({
                where:
                {
                    id: orderId
                },
                cascade: true
            })
        } catch (error) {
            throw boom.internal(error.message);
        }
    }
}

module.exports = OrdersService;
