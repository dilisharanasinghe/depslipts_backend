var authenticate = require('../middleware/auth');


const authController = async (req, res, next) => {
    try{
        res.auth = await authenticate(req.headers.authorization.split(" ")[1]);
    }catch(error){
        res.auth = {verified: false, message:error};
    }
    next();
  };

module.exports = authController