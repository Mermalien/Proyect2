const bcrypt = require("bcrypt");
const uuid = require("uuid");

const {generateError} = require("../../utils");

const {selectUserByEmail, insertUser} = require("../../repositories/users");

const {createUserSchema} = require("../../schemas/users");



const createUser = async (req, res, next) => {
    try {
        await createUserSchema.validateAsync(req.body);

        const {name, email, password} = req.body;

        const repeatMail = await selectUserByEmail(email);
        if(repeatMail){
            generateError("Already exists, 400");
        }

        //Encriptar la password
        const encryptedPass = await bcrypt.hash(password, 10);

        //Codigo de registro aleatorio
       // const registrationCode = uuid.v4();

        //Insertar los datos del user en la BBDD
        const insertId = await insertUser({name, email, encryptedPass});

        res.status(201).send({status: "Ok", data: {id: insertId, name, email}});

        console.log(`User creado correctamente`);
    } catch (error) {
        next(error);
    }
};

module.exports = createUser;