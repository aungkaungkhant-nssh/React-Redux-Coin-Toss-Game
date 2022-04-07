import React from 'react'
import {Link,useLocation} from 'react-router-dom';
import classes from './Navbar.module.css';
function Navbar() {
  const location = useLocation();
  const pathName = location.pathname
  return (
    <nav  className="navbar navbar-expand-lg navbar-light bg-info ">
         <Link  className="navbar-brand text-warning" to="/">Coin Toss Game</Link>
        <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbarNav">
            <ul  className="navbar-nav ml-auto">
                <li  className={`nav-item ${pathName==="/" && classes.current }`}>
                    <Link  className="nav-link  text-white" to="/"><i class="fa-solid fa-house mr-2"></i>Home</Link>
                </li>
                <li  className={`nav-item ${pathName==="/about" && classes.current }`}>
                    <Link  className="nav-link text-white" to="/about"><i class="fa-solid fa-gamepad mr-2"></i>About</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar