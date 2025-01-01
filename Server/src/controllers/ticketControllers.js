const Joi = require('joi')
const { Ticket, UserTec } = require('../../database/models')
const { Department } = require('../../database/models')

const validateTicketInput = (data) => {
  const schema = Joi.object({
    departmentId: Joi.required(),
    description: Joi.string().required(),
    nomeFunc: Joi.string().required(),
    cargo: Joi.string().valid('direitor', 'chefe_seccao', 'tecnico').required(),
    equip: Joi.string().required(),
    problem: Joi.string().required(),
    status: Joi.string().valid('Completo','Incompleto'),
    priority: Joi.string().valid('baixa', 'media', 'alta', 'urgente').required(),
    tec_notes: Joi.string(),
    anexos: Joi.string(),
    // openedAt: Joi.required(),
    
  })
  return schema.validate(data)
} 



const ticketControllers = {
  createTicket: async (req, res) => {
    try {
      // pegando o Id do usuario
      const userId = req.user.userId

      const { departmentId, nomeFunc, cargo, description, equip, problem, priority } = req.body
      // Validar os dados
      const { error } = validateTicketInput(req.body)
      if(error){
          return res.status(409).json({error: error.details[0].message})
      }
      // Criando o novo ticket
      const newTicket = await Ticket.create({
        department_id: departmentId,
        userTec_id: userId,
        cargo,
        nomeFunc,
        priority,
        equip,
        problem,
        description,
      })

      return res.status(200).json({ message: "ticket creado com sucesso!", newTicket })

    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Erro interno do servidor."})
    }
  },
  getTickets: async (req, res) => {
    try {
      const tickets = await Ticket.findAll({
        include : {
          model: Department,
          as: 'Department' ,
          attributes: ['nome']
        }
      })
      return res.status(200).json(tickets)

    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Erro interno do servidor."})
    }
  },
  getTicket: async (req, res) => {
    try {
      const ticketId = req.params.idTicket

      const ticket = await Ticket.findByPk(ticketId, {
        include : [
          {
            model: Department,
            as: 'Department' ,
            attributes: ['nome']
          },
          {
            model: UserTec,
            as: 'UserTec',
            attributes: ['full_name']
          }

        ]

      })
      if(!ticket){ return res.status(404).json({message: "Ticket não encontrado."})}

      return res.status(200).json(ticket)

    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: "Erro interno do servidor."})
    }
  },
  AssumedTicket: async (req, res) => {
  try {
    const userId = req.user.userId; 
    const ticketId = req.params.idTicket; 
    // Buscar o ticket pelo ID
    const ticket = await Ticket.findByPk(ticketId);
    if (!ticket) {
      return res.status(404).json({ error: "Ticket não encontrado." });
    }
    // Atualizar o ticket
    await ticket.update({
      status: "Assumido",
      assignedTo: userId,
    });

    // Responder ao cliente com o ticket atualizado
    return res.status(200).json({
      message: "Ticket assumido com sucesso.",
      ticket: {
        id: ticket.id,
        status: ticket.status,
        assignedTo: ticket.assignedTo,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Erro interno do servidor. Por favor, tente novamente mais tarde.",
    });
  }
  },
  closedTicket: async (req, res) => {
    try {
      const ticketId = req.params.idTicket; 

      const { tec_notes, tec_description } = req.body

      if(!tec_notes || !tec_description ) return res.status(400).json({error: "Preencha todos os dados"})

      // Buscar o ticket pelo ID
      const ticket = await Ticket.findByPk(ticketId);
      if (!ticket) {
        return res.status(404).json({ error: "Ticket não encontrado." });
      }
      // Atualizar o ticket
      await ticket.update({
        status: "Terminado",
        tec_notes,
        tec_description
      });

      return res.status(200).json({
        message: "Ticket Finalizado com sucesso.",
        ticket: {
          id: ticket.id,
          status: ticket.status,
          tec_notes: ticket.tec_notes,
          tec_description: ticket.tec_description
        },
      });

    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: "Erro interno do servidor. Por favor, tente novamente mais tarde.",
      });
    }
  }


}

module.exports = ticketControllers