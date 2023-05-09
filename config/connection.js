// loads environment to var
require('dotenv').config();

const Sequelize = require('sequelize');

//new instance of sequelize and connects to the db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// exports the sequelize for use in oter models
module.exports = sequelize;
