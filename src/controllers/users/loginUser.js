const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {selectUserByEmail} = require("../../repositories/users");
const {loginUserSchema} = require("../../schemas/users");
const {generateError} = require("../../utils");

const loginUser = async (req, res, next) => {
    try {
        await loginUserSchema.validateAsync(req.body);
        const{email, password} = req.body;

        const user = await selectUserByEmail(email);
        if(!user){
            generateError("Email o contraseña incorrectos", 400);
        }

        if(user.registrationCode){
            generateError("Usuario sin activar");
        }
        
        const passOk = await bcrypt.compare(password, user.password);
        if(!passOk){
            generateError("Email o contraseña incorrectos", 400);
        }

        const tokenPayLoad = {id: user.id};

        const token = jwt.sign(tokenPayLoad, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });
        
        res.status(200).send({status: "ok", data: {token}});
    } catch (error) {
        next(error);
    }
};

module.exports = loginUser;