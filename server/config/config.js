const dotenv = require("dotenv");

dotenv.load();

module.exports = {
  development: {
    username: "root",
    password: "Aabdm@147369",
    database: "frontend-traning",
    port: 5432,
    dialect: "mysql",
  },
  test: {
    use_env_variable: "DATABASE_TEST_URL",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
  },
};
