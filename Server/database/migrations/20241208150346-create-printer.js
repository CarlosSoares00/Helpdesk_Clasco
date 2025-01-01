// migrations/xxxx-create-printers.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Printers', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      referencia_toner: {
        type: Sequelize.STRING,
      },
      imagem: {
        type: Sequelize.STRING,
      },
      defeitos: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.ENUM('ativo', 'em_manutencao', 'desativado'),
        defaultValue: 'ativo',
      },
      capacidade_impressao: {
        type: Sequelize.INTEGER,
      },
      departmentId: {
        type: Sequelize.UUID,
        references: {
          model: 'Departments',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Printers');
  },
};