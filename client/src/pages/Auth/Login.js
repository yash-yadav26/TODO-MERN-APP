import React, { useState } from 'react'
import { Link , useNavigate } from "react-router-dom"
import './AuthStyle.css'
import AuthServices from '../../Services/AuthServices';
import toast from 'react-hot-toast'
import { geterrormessage } from '../../utils/ErrorMessage';

const Login = () => {
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const navigate = useNavigate()
// login function
const loginHandler = async(e)=>{
try {
  e.preventDefault()
  const data = {email,password}
  const res  = await AuthServices.loginUser(data)
    localStorage.setItem('todoapp' , JSON.stringify(res.data))
  toast.success(res.data.message)
  navigate("/Home")
  console.log(res.data);
  
} catch (err) {
  toast.error(geterrormessage(err))
  console.log(err);
  
}
}

return (
    <div className="form-container">
      <div className="form">
        <div className="mb-3">
          <i className="fa-solid fa-circle-user"></i>
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="enter email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="enter password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="form-bottom">
          <p className="text-center">
            not a user? please
            <Link to="/register"> Regiser</Link>
          </p>
          <button type="submit" className="login-btn" onClick={loginHandler}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
    