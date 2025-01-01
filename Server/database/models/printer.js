// models/printer.js
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Printer extends Model {
    static associate(models) {
      Printer.belongsTo(models.Department, {
        foreignKey: 'departmentId',
        as: 'department',
      });
    }
  }

  Printer.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    modelo: DataTypes.STRING,
    referencia_toner: DataTypes.STRING,
    imagem: DataTypes.STRING,
    defeitos: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM('ativo', 'em_manutencao', 'desativado'),
      defaultValue: 'ativo',
    },
    capacidade_impressao: DataTypes.INTEGER,
    departmentId: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Printer',
    timestamps: true,
  });

  return Printer;
};