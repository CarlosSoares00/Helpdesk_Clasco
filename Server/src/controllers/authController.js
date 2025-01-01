const { User } = require('../../database/models')
const { UserTec } = require('../../database/models')


const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Joi = require('joi')

const JWT_SECRET = "CarlosSoares2004@"
const JWT_EXPIRATION = '1h';

const validateUserInput = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    n_bi: Joi.string().required(),
    phone: Joi.number().required(),
    departmentId: Joi.string().required(),
    password: Joi.string()
    .min(12)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/)
    .required(),
    confirmPassword: Joi.string()
    .min(12)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/)
    .required(),
    role: Joi.string().valid('admin', 'tecnico', 'usuario').default('usuario'),
  })

  return schema.validate(data);
}
const validateUserAdminInput = (data) => {
  const schema = Joi.object({
    full_name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone_number: Joi.number().required(),
    specialization: Joi.string().valid('redes_computador', 'hardware', 'software', 'gestao_servidor').default('hardware'),
    password: Joi.string()
    .min(12)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/)
    .required(),
    confirmPassword: Joi.string()
    .min(12)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/)
    .required(),
  })

  return schema.validate(data);
}


const authController = {
  registerAdmin: async (req, res) => {
    try {
      const { full_name, email, phone_number, specialization, password, confirmPassword} = req.body

      // Analise se ja existe o usuario
      const userExist = await UserTec.findOne({ where: { email }})
      if(userExist) {
        return res
            .status(409)
            .json({ message: "Esse email já possui uma conta verificada."})
      }
      // Validação dos campos
      const { error } = validateUserAdminInput(req.body)
      if(error){
          return res.status(409).json({error: error.details[0].message})
      }
      // Verificando se a password é igual ao confirmedPassword
      if(password != confirmPassword) {
        return res.status(400).json({ error: "As senhas devem ser iguais."})
      }
      //Criando uma Hash para criptar a password do Usuario
      const passwordHash = await bcrypt.hash(password, 10)
      
      //Utilizando o Sequelize para criar um novo usuario
      const newUser = await UserTec.create({
        full_name,
        email,
        phone_number,
        password: passwordHash,
        specialization,
        avatar: null, // Inicialmente, sem avatar
        isActive: true, // Ativar o usuário por padrão
      });

      // Returna um estado 201 com uma mensaguem e os dados do usuario criado
      return res
      .status(201)
      .json({ message: 'Usuário criando com sucesso', newUser })



    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Erro interno do servidor' })
    }
    
  },
  register: async (req, res) => {
    try {
      const { first_name, last_name,  email, n_bi, role, phone, departmentId, password, confirmPassword} = req.body
      
      // Analise se ja existe o usuario
      const userExist = await User.findOne({ where: { email }})
      if(userExist) {
        return res
            .status(409)
            .json({ message: "Esse email já possui uma conta verificada."})
      }
      // Validação dos campos
      const { error } = validateUserInput(req.body)
      if(error){
          return res.status(409).json({error: error.details[0].message})
      }
      // Verificando se a password é igual ao confirmedPassword
      if(password != confirmPassword) {
        return res.status(400).json({ error: "As senhas devem ser iguais."})
      }
      //Criando uma Hash para criptar a password do Usuario
      const passwordHash = await bcrypt.hash(password, 10)
      
      //Utilizando o Sequelize para criar um novo usuario
      const newUser = await User.create({
        first_name,
        last_name,
        email,
        departmentId,
        n_bi,
        phone,
        password: passwordHash,
        role,
        avatar: null, // Inicialmente, sem avatar
        isActive: true, // Ativar o usuário por padrão
      });

      // Returna um estado 201 com uma mensaguem e os dados do usuario criado
      return res
      .status(201)
      .json({ message: 'Usuário criando com sucesso', newUser })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: 'Erro interno do servidor' })
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body
      // Verificando o usuario
      const user = await User.findOne({ where: { email } })
      
      if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(404).json({error: " Crêdenciais Invalidas." })
      }

      if(!user.isActive) {
        return res.status(403).json({ message: 'Conta desativada.'})
      }

      // Atualizar o lastLogin
      user.lastLogin = new Date();
      await user.save();

      // Gerar token
      const token = jwt.sign( {userId: user.id, roleId: user.role}, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION,
      }) 
      res.setHeader('Authorization', `Bearer ${token}`)

      return res.status(200).json({ message: "Login realizado com sucesso!", token })
    } catch (error) {
      console.log(error)
      res.status(500).json({error: "Erro interno do servidor"})
    }
  },
  loginAdmin: async (req, res) => {
    try {
      const { email, password } = req.body
      // Verificando o usuario
      const user = await UserTec.findOne({ where: { email } })
      
      if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(404).json({error: " Crêdenciais Invalidas." })
      }

      if(!user.isActive) {
        return res.status(403).json({ message: 'Conta desativada.'})
      }

      // Atualizar o lastLogin
      user.lastLogin = new Date();
      await user.save();

      // Gerar token
      const token = jwt.sign( {userId: user.id, roleId: user.role}, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION,
      }) 
      res.setHeader('Authorization', `Bearer ${token}`)

      return res.status(200).json({ message: "Login realizado com sucesso!", token })
    } catch (error) {
      console.log(error)
      res.status(500).json({error: "Erro interno do servidor"})
    }
  }
}

module.exports = authController