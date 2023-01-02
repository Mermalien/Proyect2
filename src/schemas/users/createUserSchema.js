const Joi = require("joi");

const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().min(6).max(100).required(),
    password: Joi.string().min(8).max(50).required(),
});

module.exports = createUserSchema;