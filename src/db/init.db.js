//import schemas and models
const { UserModel, UserSchema } = require("./models/user");
const { BarberModel, BarberSchema } = require("./models/barber");
const { ReservationModel, ReservationSchema } = require("./models/reservation");
const { ProductModel, ProductSchema } = require("./models/product");
const { OrderModel, OrderSchema } = require("./models/order");
const { OrderDetailModel, OrderDetailSchema } = require("./models/orderDetail");

function setupModels(sequelize) {
  UserModel.init(UserSchema, UserModel.config(sequelize));
  BarberModel.init(BarberSchema, BarberModel.config(sequelize));
  ReservationModel.init(ReservationSchema, ReservationModel.config(sequelize));
  ProductModel.init(ProductSchema, ProductModel.config(sequelize));
  OrderModel.init(OrderSchema, OrderModel.config(sequelize));
  OrderDetailModel.init(OrderDetailSchema, OrderDetailModel.config(sequelize))

  UserModel.hasMany(ReservationModel);
  ReservationModel.belongsTo(UserModel);

  UserModel.hasMany(OrderModel);
  OrderModel.belongsTo(UserModel);

  BarberModel.hasMany(ReservationModel);
  ReservationModel.belongsTo(BarberModel);

  OrderModel.belongsToMany(ProductModel, { through: OrderDetailModel })
  ProductModel.belongsToMany(OrderModel, { through: OrderDetailModel })
}

module.exports = setupModels;
