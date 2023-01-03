const Joi = require("joi");

const filterPostsSchema = Joi.object({
  titulo: Joi.string().max(200).messages({
    "string.max": "Title has to be less than 200 characters long",
    "string.base": "Title has to be a string",
  }),
  descripcion: Joi.string().max(5000).messages({
    "string.max": "Description has to be less than 5000 characters long",
    "string.base": "Description has to be a string",
  }),
});

module.exports = filterPostsSchema;
