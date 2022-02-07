const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    // define columns
    // this will be the column for the id
    id: {
      type: DataTypes.INTERGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //this will be the column for the product id
    product_id: {
      type: DataType.INTERGER,
      references: {
        model: "product",
        key: "id"
      }
    },
    // creating of the column for the tag id
    tag_id: {
      type: DataTypes.INTERGER,
      references: {
        model: "tag",
        key: "id"
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
