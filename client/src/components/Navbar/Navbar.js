import React from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

// const fontColor = {
//   color:"black"
// }

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <div class="navbar-fixed">
   <nav>
      <div className="container">
        <a href="/" class="brand-logo black-text">TNT</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/allTools" class="black-text">All Tools</a></li>
            <li><a href="/postTool" class="black-text">Post Tools</a></li>
            <li><a href="/signIn" class="black-text">Sign In</a></li>
            <li><a href="/signUp" class="black-text">Sign Up</a></li>
        </ul>
      </div>   
    </nav>
  </div>
);

export default Navbar;
