const { selectUserByCode} = require("../../repositories/users");

const { generateError } = require("../../utils");

const activateUser = async (req, res, next) => {
    try {
        const {registrationCode} = req.params;
        const user = await selectUserByCode(registrationCode);

        if(!user){
            generateError("Código inválido o usuario ya registrado", 400);
        }

        res.status(200).send({status: "Ok", message: "Usuario activado correctamente!"});
    } catch (error) {
        next(error);
    }
};

module.exports = activateUser;