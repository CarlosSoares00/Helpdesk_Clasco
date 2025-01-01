// models/computer.js
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Computer extends Model {
    static associate(models) {
      Computer.belongsTo(models.Department, {
        foreignKey: 'departmentId',
        as: 'department',
      });
    }
  }

  Computer.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    defeitos: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM('ativo', 'inativo', 'em_reparo', 'desativado'),
      defaultValue: 'ativo',
    },
    mouse: DataTypes.BOOLEAN,
    cpu: DataTypes.STRING,
    tela: DataTypes.STRING,
    teclado: DataTypes.BOOLEAN,
    sistema_operativo: DataTypes.STRING,
    memoria_ram: DataTypes.INTEGER,
    memoria_disco: DataTypes.INTEGER,
    departmentId: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Computer',
    timestamps: true,
  });

  return Computer;
};