const { Department } = require('../../database/models')
const Joi = require('joi');

const departmentSchema = Joi.object({
  nome: Joi.string().required(),
  descricao: Joi.string(),
  localizacao: Joi.string().required(),
});



const departament = {
  createDp: async (req, res) => {
    try {
        const { nome, descricao, localizacao } = req.body
        
        const { error } = departmentSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });
        
        const departamentExist = await Department.findOne({ where: { nome } })
        if(departamentExist){
          return res.status(409).json({ message: "Departamento existente/registrado"})
        }

        await Department.create({
          nome, descricao, localizacao
        })

        return res.status(201).json({ message: "Departamento criado com sucesso"})

      } catch (error) {
        console.log(error)
        return res.status(500).json({ error: 'Erro interno do servidor' })
      }
  },
  getsDp: async (req, res) =>{
    try {
      const departaments = await Department.findAll()
      return res.status(200).json(departaments)
    
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch departments' });
    }
  },
  updateDp: async (req, res) => {
    try {
      const { error } = departmentSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });
  
      const department = await Department.findByPk(req.params.id);
      if (!department) return res.status(404).json({ error: 'Department not found' });
  
      await department.update(req.body);
      return res.status(200).json(department);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update department' });
    }
  },
  deleteDp: async (req, res) => {
    try {
      const department = await Department.findByPk(req.params.id);
      if (!department) return res.status(404).json({ error: 'Department not found' });

      await department.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete department' });
    }
  }
}

module.exports = departament
