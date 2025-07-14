let express  = require("express")
const { todocontroller, deleteTodocontroller, updateTodocontroller } = require("../controllers/todocontrollers")
const { getTodocontroller } = require("../controllers/todocontrollers")
const authMiddleware = require("../middlewares/authMiddleware")
const router = express.Router()

// crreate todo
router.post('/create' ,authMiddleware, todocontroller)

// gettodo
router.post('/getAll/:userId' ,authMiddleware, getTodocontroller)

// deletetodo
router.post('/delete/:id' ,authMiddleware, deleteTodocontroller)

// updatetodo
router.patch('/update/:id' ,authMiddleware, updateTodocontroller)

module.exports = router