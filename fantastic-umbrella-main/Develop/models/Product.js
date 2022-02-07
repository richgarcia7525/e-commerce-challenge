// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    //this will be the id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      aitoIncrement: true
    },
    //this will be the column that will hold the product name
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //this will be the column for price
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    //creating the column for stock
    stock: {
      type: DataTypes.INTERGER,
      allowNull: false,
      defaultValue: 10,
      validates: {
        isNumeric: true
      }
    },
    //this will create the column for the category id
    category_id: {
      type: DataTypes.INTERGER,
      references: {
        model: "category",
        key: "id"
      }
    }
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
