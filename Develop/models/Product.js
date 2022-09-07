// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {


}

// set up fields and rules for Product model
Product.init(
  {
    product_id : {
      autoIncrement: true, 
      primaryKey: true, 
      type: DataTypes.INTEGER
    },
    // define columns
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL
    },
    stock: {
      type: DataTypes.INTEGER
    },
    category_id: {
      type: DataTypes.INTEGER
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
