const { Computer } = require('../../database/models')
const { Department } = require('../../database/models')


const equip = {
  createComputador: async (req, res) => {
    try {
      const { 
          nome, 
          tipo, 
          numero_serie, 
          marca, 
          processador, 
          tamanho_ram, 
          tipo_ram,
          capacidade_armazenamento,
          tipo_armazenamento,
          sistema_operacional,
          status_rede,
          id_anydesk,
          observacoes,
          departmentId
      } = req.body
      // Verificar campos obrigatórios
      if (
        !nome ||
        !tipo ||
        !numero_serie ||
        !marca ||
        !sistema_operacional ||
        !departmentId
      ) {
        return res.status(400).json({
          message: "Os campos obrigatórios não foram preenchidos.",
        });
      }

      const computadorExist = await Computer.findOne({where: {numero_serie}})
      if(computadorExist){
          return res.status(409).json({ message: "Computador existenet"})
      }
        // Definir as datas automáticas
      const ultimaManutencao = new Date(); // Data atual
      const proximaManutencao = new Date();
      proximaManutencao.setMonth(proximaManutencao.getMonth() + 1); // Adiciona 1 mês

      const newComputador = await Computer.create({
        nome, 
        tipo, 
        numero_serie, 
        marca, 
        processador, 
        tamanho_ram, 
        tipo_ram,
        capacidade_armazenamento,
        tipo_armazenamento,
        sistema_operacional,
        status_rede,
        ultima_manutencao: ultimaManutencao, // Preenchido automaticamente
        proxima_manutencao: proximaManutencao, // Preenchido automaticamente
        id_anydesk,
        observacoes,
        departmentId
      })

      const computadorCompleto = await Computer.findByPk(newComputador.id, {
        include: {
          model: Department,
          as: "department",
          attributes: ['nome', 'descricao'] 
        }
      });
      return res.status(201).json({
        message: "Computador criado com sucesso.",
        computador: computadorCompleto,
      });
      
  } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Erro interno do servidor'})
  }
  }
}

module.exports = equip