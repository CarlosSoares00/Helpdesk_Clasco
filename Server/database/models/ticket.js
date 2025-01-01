'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    
    static associate(models) {
      Ticket.belongsTo(models.UserTec, {  
        foreignKey: 'userTec_id',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Ticket.belongsTo(models.User, {
        foreignKey: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });

      Ticket.belongsTo(models.Department, {
        as: 'Department',
        foreignKey: 'department_id',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }
  Ticket.init({
    user_id: DataTypes.UUID,
    userTec_id: DataTypes.UUID,
    department_id: DataTypes.UUID,
    description: DataTypes.TEXT,
    equip: DataTypes.STRING,
    problem: DataTypes.STRING,
    status:{
      type: DataTypes.ENUM('Assumido', 'Terminado', 'Em Pausa'),
      defaultValue: 'Fechado',
    },
    priority: DataTypes.STRING,
    tec_notes: DataTypes.TEXT,
    tec_description: DataTypes.TEXT,
    anexos: DataTypes.STRING,
    openedAt: DataTypes.DATE,
    closedAt: DataTypes.DATE,
    assignedTo: DataTypes.UUID,
    requestedBy: DataTypes.INTEGER,
    nomeFunc: DataTypes.STRING,
    cargo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};