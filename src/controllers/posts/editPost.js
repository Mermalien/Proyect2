const { selectPostById, updatePostById } = require("../../repositories/posts");
const generateError = require("../../utils/generateError");

const editPost = async (req, res, next) => {
    try {
        const { id } = req.params;

        const post = await selectPostById(id);

        if (!post) {
            generateError("El post que quieres actualizar, no existe!" , 404);

            const loggue
        }
    } catch (error) {
        
    }
}