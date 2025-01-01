const { UserTec } = require("../../database/models")

const bcrypt = require('bcrypt')
const Joi = require('joi')
const { v4: uuidv4 } = require('uuid');

const validateUserInput = (data) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    full_name: Joi.string().required(),
    email: Joi.string().email().required(),
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


const userController = {
  getUsuarios: async (req, res) => {
    try {
      const users = await UserTec.findAll()
      return res.status(200).json(users)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch users' });
    }
  },
  getUsuario: async (req, res) => {
    try {
      const userId = req.user.userId
      console.log(userId)
      const user = await UserTec.findByPk(userId)

      if(!user) return res.status(404).json({ error: "Usuario nao encontrado"})

      const userProfile = {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        departmentId: user.departmentId,
        n_bi: user.n_bi,
        telefone: user.phone,
        cargo: user.role

      }

      return res.status(200).json(userProfile);

      
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch user' });
    }
  },
  getAdmin: async (req, res) => {
    try {
      const userId = req.user.userId
      console.log(userId)
      const user = await UserTec.findByPk(userId)

      if(!user) return res.status(404).json({ error: "Usuario nao encontrado"})

      const userProfile = {
        id: user.id,
        name: user.full_name,
        email: user.email,
        phone: user.phone_number,
        especialidade: user.specialization,
      }

      return res.status(200).json(userProfile);

      
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch user' });
    }
  },
  actualizarUsuario: async (req,res) => {
    try {
      const { error } = validateUserInput(req.body)
      if(error){
          return res.status(409).json({error: error.details[0].message})
      }

      const user = await UserTec.findByPk(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      await user.update({ ...req.body, password: hashedPassword });

      return res.status(200).json(user);

    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch user' });
    }
  },
  
  requestPasswordReset: async ( req, res) => {
    try {
      const { email } = req.body
      const user = await UserTec.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      // Gerar token de redefinição
      const token = uuidv4();
      user.passwordResetToken = token;
      user.passwordResetExpired = new Date(Date.now() + 3600000); // 1 hora de expiração
      await user.save();

      // Aqui você deve enviar o token por e-mail para o usuário
      console.log(`Token de redefinição enviado: ${token}`);

      return res.status(200).json({ message: 'Token de redefinição enviado para o e-mail.' });

    } catch (error) {
      return res.status(500).json({ message: 'Erro ao solicitar redefinição de senha.', error });
    }
  },
  resetPassword: async (req, res) => {
    try {
      const { token, newPassword } = req.body;
      const user = await UserTec.findOne({ where: { passwordResetToken: token } });

      if (!user || new Date() > user.passwordResetExpired) {
        return res.status(400).json({ message: 'Token inválido ou expirado.' });
      }

      user.password = await bcrypt.hash(newPassword, 10);
      user.passwordResetToken = null; // Limpar o token após o uso
      user.passwordResetExpired = null; // Limpar a expiração
      await user.save();

      return res.status(200).json({ message: 'Senha redefinida com sucesso!' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao redefinir senha.', error });
    }
  },
  updateAvatar: async (req, res) => {
    try {
      const { userId } = req.params; // ID do usuário a ser atualizado
      const { avatarUrl } = req.body; // URL do novo avatar
      const user = await UserTec.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      user.avatar = avatarUrl; // Definir o novo avatar
      await user.save();

      return res.status(200).json({ message: 'Avatar atualizado com sucesso!', user });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao atualizar avatar.', error });
    }
  },
  toggleUserActiveStatus: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await UserTec.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }

      user.isActive = !user.isActive; // Alternar o status
      await user.save();

      return res.status(200).json({
        message: `Usuário ${user.isActive ? 'ativado' : 'desativado'} com sucesso!`,
        user,
      });
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao alternar status do usuário.', error });
    }
  }
}

module.exports = userController