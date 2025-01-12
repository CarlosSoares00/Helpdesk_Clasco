module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Computers', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.ENUM('desktop', 'laptop', 'all-in-one'),
        allowNull: false,
      },
      numero_serie: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      processador: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tamanho_ram: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_ram: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      capacidade_armazenamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_armazenamento: {
        type: Sequelize.ENUM('HDD', 'SSD', 'NVMe'),
        allowNull: false,
      },
      sistema_operacional: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status_rede: {
        type: Sequelize.ENUM('online', 'offline', 'unknown'),
        defaultValue: 'unknown',
      },
      url_foto: {
        type: Sequelize.STRING,
      },
      status_atual: {
        type: Sequelize.ENUM('ativo', 'inativo', 'manutenção', 'descartado'),
        defaultValue: 'ativo',
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
      ultima_manutencao: {
        type: Sequelize.DATE,
      },
      proxima_manutencao: {
        type: Sequelize.DATE,
      },
      id_anydesk: {
        type: Sequelize.STRING,
      },
      observacoes: {
        type: Sequelize.TEXT,
      },
      id_monitor: {
        type: Sequelize.UUID,
        references: {
          model: 'Monitors',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      id_keyboard: {
        type: Sequelize.UUID,
        references: {
          model: 'Keyboards',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      id_mouse: {
        type: Sequelize.UUID,
        references: {
          model: 'Mouses',
          key: 'id',
        },
        onDelete: 'SET NULL',
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Computers');
  }
};
