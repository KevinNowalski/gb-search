'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Searches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Searches.init({
    searchInput: DataTypes.STRING,
    dataReturned: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Searches',
  });
  return Searches;
};