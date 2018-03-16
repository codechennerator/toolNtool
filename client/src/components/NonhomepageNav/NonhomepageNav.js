import React from "react";
// import { Link } from "react-router-dom";
import "./NonhomepageNav.css";
// import { Input } from "../Form";

const fontColor = {
  color:"black"
}

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const NonhomepageNav = props => (
  <div class="navbar-fixed">
    <nav>
      <div className="container">
        <a href="/" class="brand-logo black-text">TNT</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>    
              <div class="center row searchbar">
                <div class="col s12 " >
                  <div class="row" id="topbarsearch">
                    <div class="input-field col s6 s12 red-text">
                      <i class="black-text material-icons prefix">search</i>
                      <input type="text" placeholder="search" id="autocomplete-input" class="autocomplete red-text" />
                      </div>
                    </div>
                  </div>
                </div>          
            </li> 
            <li><a href="/allTools" class="black-text">All Tools</a></li>
            <li><a href="/postTool" class="black-text">Post Tools</a></li>
            <li><a href="/signIn" class="black-text">Sign In</a></li>
            <li><a href="/signUp" class="black-text">Sign Up</a></li>
        </ul>
      </div>   
    </nav>
  </div>
);

export default NonhomepageNav;
