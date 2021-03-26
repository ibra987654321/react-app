import React from "react";
import { NavLink } from "react-router-dom";
import classes from '../css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://logos-download.com/wp-content/uploads/2016/06/Freelancer_logo.png" alt="" />
      </div>
      <div className="links">

        <NavLink to="/Content" ><span></span> Home</NavLink>
        <NavLink to="/About" >About</NavLink>
        <NavLink to="/Portfolio" >Portfolio</NavLink>
        <NavLink to="/Sidbar" >Sidbar</NavLink>
        <NavLink to="/Pricing" >Pricing</NavLink>
      </div>
    </div>
  )
}

export default Header;
