// models/department.js
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.User, {
        foreignKey: 'departmentId',
        as: 'users',
      });
      Department.hasMany(models.Computer, {
        foreignKey: 'departmentId',
        as: 'computers',
      });
      Department.belongsToMany(models.Printer, {
        through: 'DepartmentPrinters',
        as: 'printers',
        foreignKey: 'departmentId',
        otherKey: 'printerId',
      });
      Department.hasMany(models.Ticket, {
        as: 'Ticket',
        foreignKey: 'department_id',
      });
    }
  }

  Department.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: DataTypes.STRING,
    descricao: DataTypes.TEXT,
    localizacao: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Department',
    timestamps: true,
  });

  return Department;
};