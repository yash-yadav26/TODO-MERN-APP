import axios from 'axios'

// get user token
const user = JSON.parse(localStorage.getItem('todoapp'))

// default auth header
axios.defaults.headers.common['Authorization'] = ` Bearer ${user.token}`

// create todo
const createTodo = (data)=>{
   return axios.post('/todo/create' , data)
}

// get todo
const getAllTodo = (id)=>{
   return axios.post(`/todo/getAll/${id}`)
}

// update todo
const updateTodo = (id, data)=>{
   return axios.patch("/todo/update/"+ id , data)
}

const TodoServices = {createTodo , getAllTodo , updateTodo}
export default TodoServices