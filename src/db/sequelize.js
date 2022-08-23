const { Sequelize } = require("sequelize");
const { config } = require("../config");
const setupModels = require("./init.db");

const URI = config.DB_URL;

const sequelize = new Sequelize(URI, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  dialect: "postgres",
  logging: (message) => console.log(`[Sequelize] : ${message}`),
});

setupModels(sequelize);

sequelize.sync({
  alter: true,
  logging: (message) => console.log(`[sync]: ${message}`),
});

module.exports = sequelize;
