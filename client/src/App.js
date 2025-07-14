import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Landing from "./pages/Landing/Landing"
import Home from "./pages/Home/Home"
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import About from './pages/About/About'
import TodoList from './pages/Todo/TodoList'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
<div>
  <Routes>
    <Route path = "/" element = {<Landing/>}  />
    <Route path = "/home" element = {<Home/>}  />
    <Route  path = "/Register" element = {<Register/>} />
    <Route  path = "/login" element = {<Login/>} />
    <Route  path = "/About" element = {<About/>} />
    <Route  path = "/TodoList" element = {<TodoList/>} />
  </Routes>
  <Toaster/>
</div>
  )
}

export default App