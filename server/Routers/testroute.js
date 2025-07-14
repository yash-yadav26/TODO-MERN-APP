let express = require("express")
const testView = require("../controllers/testcontrollers")
 const router = express.Router()

 router.get('/test' , testView)

 module.exports = router