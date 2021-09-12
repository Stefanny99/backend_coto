var config = {
  client: "mysql",
  connection: {
    port: 3306,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    charset: "utf8",
  },
};

const knex = require("knex")(config);
export const bookshelf = require("bookshelf")(knex);
