const Joi = require('joi');

const computerSchema = Joi.object({
  nome: Joi.string().required().messages({
    'string.base': 'O nome do computador deve ser uma string.',
    'string.empty': 'O nome do computador não pode estar vazio.',
    'any.required': 'O nome do computador é obrigatório.',
  }),
  tipo: Joi.string().valid('desktop', 'laptop', 'notebook').required().messages({
    'string.base': 'O tipo de computador deve ser uma string.',
    'any.only': 'O tipo de computador deve ser um dos seguintes: desktop, laptop, notebook.',
    'any.required': 'O tipo de computador é obrigatório.',
  }),
  numero_serie: Joi.string().required().messages({
    'string.base': 'O número de série deve ser uma string.',
    'string.empty': 'O número de série não pode estar vazio.',
    'any.required': 'O número de série é obrigatório.',
  }),
  marca: Joi.string().required().messages({
    'string.base': 'A marca deve ser uma string.',
    'string.empty': 'A marca não pode estar vazia.',
    'any.required': 'A marca é obrigatória.',
  }),
  sistema_operacional: Joi.string().required().messages({
    'string.base': 'O sistema operacional deve ser uma string.',
    'string.empty': 'O sistema operacional não pode estar vazio.',
    'any.required': 'O sistema operacional é obrigatório.',
  }),
  departmentId: Joi.number().integer().required().messages({
    'number.base': 'O ID do departamento deve ser um número inteiro.',
    'any.required': 'O ID do departamento é obrigatório.',
  }),
});

module.exports = computerSchema;
