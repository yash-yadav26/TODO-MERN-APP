const JWT = require('jsonwebtoken')

module.exports = (req, res , next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1]
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(400).send({
                    status: 0,
                    message: "UN-AUTHORIZED USER"
                })
            }else{
  req.user = { id: decode.id };
                next()
            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            status: 0,
            message: " Plz Provide Auth Token",
            error
        })
    }
}