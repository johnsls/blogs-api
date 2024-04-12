const Joi = require('joi');

const schema = Joi.object({
  displayName: Joi.string().min(8).required()
    .messages({
      'any.required': '"displayName" Not Found',
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
  email: Joi.string().email().required()
    .messages({
      'any.required': '"email" Not Found',
      'string.email': '"email" must be a valid email',
    }),
  password: Joi.string().min(6).required()
    .messages({
      'any.required': '"password" Not Found',
      'string.min': '"password" length must be at least 6 characters long',
    }),
});

const schemaPost = Joi.object({
  title: Joi.string().required()
    .messages({
      'any.required': 'Some required fields are missing',
    }),
  content: Joi.string().required()
    .messages({
      'any.required': 'Some required fields are missing',
    }),
  categoryIds: Joi.array().required()
    .messages({
      'any.required': 'Some required fields are missing',
    }),
});

module.exports = { schema, schemaPost };