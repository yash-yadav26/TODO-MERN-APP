const todoModel = require("../models/TodoModel")

// created todo
const todocontroller = async (req,res) =>{
try {
    const {title , description ,createdBy}= req.body

    // validation
    if(!title || !description){
     return  res.status(400).send({
        status : 0,
        message:"please provide title description"
    }) 
    }
const todo = await  todoModel({title , description ,createdBy})

// save task in Db
todo.save().then(()=>{
    console.log('todo created');
    return res.status(200).send({
        status : 1,
        message:"your task has been created",
todo
    })
})

} catch (error) {
    console.log(error);
    return res.status(400).send({
        status : 0,
        message:"error in created todo api",
        error
    })
}
}
// get todo

const getTodocontroller = async (req,res)=>{
 try {
    // get user id
    const {userId} = req.params
    // validation
    if(!userId){
return  res.status(400).send({
        status : 0,
        message:"no user find with this id"
    })
    } 
    const todos = await todoModel.find({createdBy:userId})
    if(!todos){
        return  res.status(400).send({
        status : 0,
        message:"you have no todos"
    })
    }
   res.status(200).send({
        status : 0,
        message:"your Todos",
        todos
    })
 } catch (error) {
    console.log(error);
    return res.status(400).send({
        status : 0,
        message:"error in get api",
        error
    })
 }
}

//delete api
const deleteTodocontroller = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "No todo found with this id",
      });
    }
    //find id
    const todo = await todoModel.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).send({
        success: false,
        message: "No task found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Your Task Has Been Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in delete todo api",
    });
  }
};


//Update todo
const updateTodocontroller = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "please prvide todo id",
      });
    }
    const data = req.body;
    //updte
    const todo = await todoModel.findByIdAndUpdate(
      id,
      { $set: data },
      { returnOriginal: false }
    );
    res.status(200).send({
      success: true,
      message: "your task has been updated",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Todo Api",
    });
  }
};



module.exports = {todocontroller , getTodocontroller , deleteTodocontroller , updateTodocontroller }