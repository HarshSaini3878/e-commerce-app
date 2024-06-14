import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from 'react-hot-toast'


const Header = () => {
  const [Auth,SetAuth]=useAuth();
  const handleLogout=()=>{
    SetAuth({
      ...Auth,
      user:null,
      token:""
    })
    localStorage.removeItem("Auth");
    toast.success("Log Out Successfull")
  }
  return (
    <>
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
            <Link to="/" className="navbar-brand">
            <img src={"/images/logo.png"} alt="TrendHive Logo" style={{ width: '45px', height: 'auto' }} /> TrendHive
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link ">
                  Category
                </NavLink>
              </li>
             {
              !Auth.user?(
               <>
                <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li></>
              ):(
                <li className="nav-item">
                <NavLink to="/logout" className="nav-link" onClick={handleLogout}>
                  LogOut
                </NavLink>
              </li>
              )
             }
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;