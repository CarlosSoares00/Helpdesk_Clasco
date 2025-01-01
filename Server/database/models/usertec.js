'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserTec.hasMany(models.Ticket, {
        foreignKey: 'userTec_id',
        as: 'Ticket',
      });
    }
  }
  UserTec.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    specialization: {
      type: DataTypes.ENUM('redes_computador', 'hardware', 'software', 'gestao_servidor'),
      defaultValue: 'hardware',
    },
    password: DataTypes.STRING,
    passwordResetToken: DataTypes.STRING,
    passwordResetExpires: DataTypes.DATE,
    avatar: DataTypes.STRING,
    lastLogin: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserTec',
  });
  return UserTec;
};
