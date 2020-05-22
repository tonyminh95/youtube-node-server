const Joi = require('joi');

function userValidation(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required(),
    }

    return Joi.validate(user, schema);
}

exports.userValidation = userValidation;