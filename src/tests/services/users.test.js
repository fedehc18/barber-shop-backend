const test = require("ava");
const proxyquire = require("proxyquire").noCallThru();
const { modelsData } = require("../../tests_data/db.test");

test.beforeEach(async (t) => {
  t.context = {
    withData: proxyquire("../../services/users", {
      "../db/sequelize": {
        models: modelsData,
      },
    }),
  };
});

test.serial("Users service get all", async (t) => {
  const Service = t.context.withData;
  const testService = new Service();
  const response = await testService.getUsers();
  t.is(response.length, 3);
});

test.serial("Users service get user by username", async (t) => {
  const Service = t.context.withData;
  const testService = new Service();
  const response = await testService.getUserByUsername("fede-09@hotmail.com");
  t.is(response.email, "fede-09@hotmail.com");
});

test.serial("Users service create user", async (t) => {
  const Service = t.context.withData;
  const testService = new Service();

  const user = {
    fullname: "Fede Herrera",
    password: "xxx4",
    email: "fede-09@hotmail.com",
  };

  const response = await testService.createUser(user);
  t.is(response.role, "USER");
  t.is(response.fullname, "Fede Herrera");
});
