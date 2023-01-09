const Joi = require("joi");

const postIdSchema = Joi.object({
  idPost: Joi.number().positive().required(),
});

module.exports = postIdSchema;
