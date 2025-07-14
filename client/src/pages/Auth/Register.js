import React,{useState} from 'react'
import { Link , useNavigate } from "react-router-dom"
import './AuthStyle.css'
import AuthServices from '../../Services/AuthServices';
import toast from 'react-hot-toast'


const Register = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [username, setusername] = useState("")
const navigate = useNavigate()
  const RegisterHandler= async(e)=>{
try {
  e.preventDefault()
  const data = {email,password , username}
  const res  = await AuthServices.registerUser(data)
  toast.success(res.data.message)
  navigate("/login")
  console.log(res.data);
  
} catch (error) {
  toast.error("something went wrong")
  console.log(error);
  
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
            type="text"
            className="form-control"
            placeholder="enter username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="enter email"
            value = {email}
            onChange={(e)=>setemail(e.target.value)}
            />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="enter password"
            value= {password}
            onChange={(e)=>setpassword(e.target.value)}
/>
        </div>
        <div className="form-bottom">
          <p className="text-center">
            already user? please
            <Link to="/login"> login</Link>
          </p>
          <button type="submit" className="login-btn" onClick={RegisterHandler}>
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};
 

export default Register