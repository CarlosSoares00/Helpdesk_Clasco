 // models/user.js
 const { Model, DataTypes } = require('sequelize');
 module.exports = (sequelize) => {
   class User extends Model {
     static associate(models) {
       User.belongsTo(models.Department, {
         foreignKey: 'departmentId'
       });
       
     }
   }
 
   User.init({
     id: {
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       primaryKey: true,
     },
     first_name: DataTypes.STRING,
     last_name: DataTypes.STRING,
     email: {
       type: DataTypes.STRING,
       unique: true,
     },
     departmentId: DataTypes.UUID,
     n_bi: DataTypes.STRING,
     phone: DataTypes.INTEGER,
     password: DataTypes.STRING,
     passwordResetToken: DataTypes.STRING,
     passwordResetExpires: DataTypes.DATE,
     role: {
       type: DataTypes.ENUM('direitor', 'chefe_secao', 'tecnico'),
       defaultValue: 'tecnico',
     },
     avatar: DataTypes.STRING,
     lastLogin: DataTypes.DATE,
     isActive: {
       type: DataTypes.BOOLEAN,
       defaultValue: true,
     },
   }, {
     sequelize,
     modelName: 'User',
     timestamps: true,
   });
 
   return User;
 };