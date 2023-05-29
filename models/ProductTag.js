const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//ProductTag extends Model class(sequalize class that defines table structure and behavior) 
class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns : include id, product_id, tag_id 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
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
