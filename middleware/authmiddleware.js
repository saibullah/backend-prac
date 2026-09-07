const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const authheader = req.headers.authorization


 if (!authheader) {
      return res.status(401).json({
                message: "No token "
            }) 
        } 
        const token = authheader.split(" ")[1]
       
        const decod = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decod
        next()
    }
    catch (err) {
        res.status(500).json(err)
    }
}
module.exports = auth