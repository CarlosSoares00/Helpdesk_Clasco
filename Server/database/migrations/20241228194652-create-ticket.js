'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Users', // Relacionamento com a tabela 'Users'
          key: 'id'
        },
        onUpdate: 'CASCADE', // O que fazer quando o usuário for atualizado
        onDelete: 'SET NULL' // O que fazer quando o usuário for deletado
      },
      userTec_id: {
        type: Sequelize.UUID,
        references: {
          model: 'UserTecs', // Relacionamento com a tabela 'UserTecs'
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      department_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Departments', // Relacionamento com a tabela 'Departments'
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      description: {
        type: Sequelize.TEXT
      },
      equip: {
        type: Sequelize.STRING
      },
      problem: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.STRING
      },
      tec_notes: {
        type: Sequelize.TEXT
      },
      tec_description: {
        type: Sequelize.TEXT
      },
      anexos: {
        type: Sequelize.STRING
      },
      openedAt: {
        type: Sequelize.DATE
      },
      closedAt: {
        type: Sequelize.DATE
      },
      assignedTo: {
        type: Sequelize.UUID,
      },
      requestedBy: {
        type: Sequelize.INTEGER
      },
      nomeFunc: {
        type: Sequelize.STRING
      },
      cargo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};
