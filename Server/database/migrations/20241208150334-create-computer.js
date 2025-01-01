// migrations/xxxx-create-computers.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Computers', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      defeitos: {
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.ENUM('ativo', 'inativo', 'em_reparo', 'desativado'),
        defaultValue: 'ativo',
      },
      mouse: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      cpu: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tela: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      teclado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      sistema_operativo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      memoria_ram: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      memoria_disco: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('Computers');
  },
};