const handleError = (req, res, next) =>{
    res.status(error.statusCode || 500).send({status: "error", message: error.message});
};

module.exports = handleError;