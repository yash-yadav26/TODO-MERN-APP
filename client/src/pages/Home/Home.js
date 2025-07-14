import { useState , useEffect } from "react";
import Navbar from "../../components/Layout/Navbar";
import PopModel from '../../components/Layout/PopModel';
import TodoServices from "../../Services/TodoServices";
import Card from "../../components/Card/Card";
const Home = () => {
  const [showModel, setshowModel] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [allTask, setAllTask] = useState([])

  const openModelHandler = () =>{
    setshowModel(true)
  }

   const getUserTask = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('todoapp'))
      const id = userData?.user?._id
      if (!id) return console.log("User ID not found in localStorage")

      const data = await TodoServices.getAllTodo(id)
      console.log("Fetched Tasks: ", data.data.todos)
      setAllTask(data.data.todos)
    } catch (error) {
      console.log("Error fetching tasks:", error)
    }
  }
      useEffect(() => {
    getUserTask()
  }, [])
  
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="add-task">
          <h1>Your Task</h1>
          <input type="search" placeholder="search your task" />
          <button className=" btn btn-primary" onClick={openModelHandler}>
            Create Task <i className="fa-solid fa-plus"></i>
          </button>
        </div>
{allTask && <Card allTask={allTask}/>}
        {/*model*/}
        <PopModel
        showModel = {showModel}
        setshowModel = {setshowModel}
        title = {title}
        setTitle = {setTitle}
        description = {description}
        setDescription = {setDescription}
        getUserTask = {getUserTask}
        />
      </div>
    </>
  )
}

export default Home