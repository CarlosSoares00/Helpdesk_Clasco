'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Monitor extends Model {
    static associate(models) {
      Monitor.hasMany(models.Computer, { foreignKey: 'id_monitor' });
    }
  }

  Monitor.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    tamanho: DataTypes.STRING,
    tipo: DataTypes.STRING,
    resolucao: DataTypes.STRING,
    status: DataTypes.ENUM('ativo', 'inativo', 'em_reparo'),
  }, {
    sequelize,
    modelName: 'Monitor',
  });

  return Monitor;
};
