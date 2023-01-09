const Joi = require("joi");

const createPostSchema = Joi.object({
  title: Joi.string().min(4).max(200).required().messages({
    "string.min": "Title has to be 4 characters long",
    "string.max": "Title has to be less than 200 characters long",
    "any.required": "Title is required",
    "string.base": "Title has to be a string",
  }),
  description: Joi.string().min(4).max(5000).required().messages({
    "string.min": "Description has to be 4 characters long",
    "string.max": "Description has to be less than 5000 characters long",
    "any.required": "Description is required",
    "string.base": "Description has to be a string",
  }),
  url: Joi.string().min(4).max(5000).messages({
    "string.min": "Description has to be 4 characters long",
    "string.max": "Description has to be less than 5000 characters long",
    "any.required": "Description is required",
    "string.base": "Description has to be a string",
  }),
});

module.exports = createPostSchema;
