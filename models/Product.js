// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      allowNull: false, // Disallow NULL values
      primaryKey: true, // Set as the primary key
      autoIncrement: true, // Automatically increment the value for each new record
    },
    product_name: {
      type: DataTypes.STRING, // Set the data type to STRING
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL, // Set the data type to DECIMAL
      allowNull: false, 
      validate: {
        isDecimal: true, 
      },
    },
    stock: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      allowNull: false, 
      defaultValue: 10, 
      validate: {
        isNumeric: true, 
      },
    },
    category_id: {
      type: DataTypes.INTEGER, // Set the data type to INTEGER
      references: {
        model: "category", 
      },
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
