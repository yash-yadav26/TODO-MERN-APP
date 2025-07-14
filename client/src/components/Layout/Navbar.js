import React, {useState , useEffect} from 'react'
import {Link , useNavigate} from "react-router-dom"
import toast from 'react-hot-toast'

const Navbar = () => {
 const [username, setusername] = useState("")
const navigate = useNavigate()
//  logout function
const logoutHandler = ()=>{
    localStorage.removeItem("todoapp")
    toast.success("logout succesfully")
    navigate('/login')
}

//  get username
useEffect(() => {
  const userData =  JSON.parse(localStorage.getItem("todoapp"))
  console.log(userData && userData.user.username);
setusername(userData && userData.user.username)
}, [])


  return (
  <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <h4 className="navbar-brand">
              <i className="fa-solid fa-user-tie" /> &nbsp;
              <i>Welcome</i> {username}!
            </h4>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todoList">
                  My todo List
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link "
                  title="logout"
                  onClick={logoutHandler}
                >
                  <i className="fa-solid fa-power-off text-danger fa-2x" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;