let express = require ("express")
const { registercontroller, logincontroller } = require("../controllers/usercontroller")
let router = express.Router()

// register route
router.post('/register' , registercontroller )

// login route
router.post('/login' , logincontroller )

module.exports = router