'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Mouse extends Model {
    static associate(models) {
      Mouse.hasMany(models.Computer, { foreignKey: 'id_mouse' });
    }
  }

  Mouse.init({
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
    modelName: 'Mouse',
  });

  return Mouse;
};
