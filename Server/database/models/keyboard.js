'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Keyboard extends Model {
    static associate(models) {
      Keyboard.hasMany(models.Computer, { foreignKey: 'id_keyboard' });
    }
  }

  Keyboard.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    tipo: DataTypes.STRING,
    cor: DataTypes.STRING,
    status: DataTypes.ENUM('ativo', 'inativo', 'em_reparo'),
  }, {
    sequelize,
    modelName: 'Keyboard',
  });

  return Keyboard;
};
