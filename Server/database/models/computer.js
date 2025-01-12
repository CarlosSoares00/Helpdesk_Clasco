const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Computer extends Model {
    static associate(models) {
      // Relacionamento com o modelo Department (departamento)
      Computer.belongsTo(models.Department, {
        foreignKey: 'departmentId',
        as: 'department',
      });
      // Relacionamento com o modelo Monitor (monitor)
      Computer.belongsTo(models.Monitor, {
        foreignKey: 'id_monitor',
        as: 'monitor',
      });
      // Relacionamento com o modelo Keyboard (teclado)
      Computer.belongsTo(models.Keyboard, {
        foreignKey: 'id_keyboard',
        as: 'keyboard',
      });
      // Relacionamento com o modelo Mouse (mouse)
      Computer.belongsTo(models.Mouse, {
        foreignKey: 'id_mouse',
        as: 'mouse',
      });
    }
  }

  Computer.init({
    // ID único do computador (UUID)
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    // Nome do computador
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Tipo do computador (desktop, laptop, all-in-one)
    tipo: {
      type: DataTypes.ENUM('desktop', 'laptop', 'all-in-one'),
      allowNull: false,
    },
    // Número de série único
    numero_serie: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    // Marca do computador
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Processador (CPU)
    processador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Tamanho da RAM
    tamanho_ram: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Tipo de RAM
    tipo_ram: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Capacidade de armazenamento
    capacidade_armazenamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Tipo de armazenamento (HDD, SSD, NVMe)
    tipo_armazenamento: {
      type: DataTypes.ENUM('HDD', 'SSD', 'NVMe'),
      allowNull: false,
    },
    // Sistema operacional
    sistema_operacional: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Status da rede (online, offline, unknown)
    status_rede: {
      type: DataTypes.ENUM('online', 'offline', 'unknown'),
      defaultValue: 'unknown',
    },
    // URL da foto do computador
    url_foto: {
      type: DataTypes.STRING,
    },
    // Status atual do computador (ativo, inativo, manutenção, descartado)
    status_atual: {
      type: DataTypes.ENUM('ativo', 'inativo', 'manutenção', 'descartado'),
      defaultValue: 'ativo',
    },
    // ID do departamento (chave estrangeira)
    departmentId: {
      type: DataTypes.UUID,
      allowNull: true, // Deixando como allowNull: true para suportar o valor NULL
    },
    // Data da última manutenção
    ultima_manutencao: {
      type: DataTypes.DATE,
    },
    // Data da próxima manutenção
    proxima_manutencao: {
      type: DataTypes.DATE,
    },
    // ID do AnyDesk do computador
    id_anydesk: {
      type: DataTypes.STRING,
    },
    // Observações sobre o computador
    observacoes: {
      type: DataTypes.TEXT,
    },
    // ID do monitor (chave estrangeira)
    id_monitor: {
      type: DataTypes.UUID,
      allowNull: true, // Permite nulo
    },
    // ID do teclado (chave estrangeira)
    id_keyboard: {
      type: DataTypes.UUID,
      allowNull: true, // Permite nulo
    },
    // ID do mouse (chave estrangeira)
    id_mouse: {
      type: DataTypes.UUID,
      allowNull: true, // Permite nulo
    },
  }, {
    sequelize,
    modelName: 'Computer',
    timestamps: true,
  });

  return Computer;
};
