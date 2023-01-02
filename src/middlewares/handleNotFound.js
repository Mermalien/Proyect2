const handleNotFound = (req, res) => {
    res.status(404).send({status: "error", message: "Not Found"});
};

module.exports = handleNotFound;