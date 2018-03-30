import React, { Component } from "react";
import  { Menu } from 'semantic-ui-react'
import t from "../../components/img/t.jpg"
import "./NonhomepageNav.css"
const inputStyle={
  display:"inline-block",
  // display:"none",
  position:"relative",
  bottom:"15px"
}

const logoStyle={
  width:"50px",
  display:"inline-block",
  position:"relative",
  top:"4px"
}


class NonhomepageNav extends Component {

  render() {

    return (
      <div 
      className="ui huge top fixed menu"
      style={{
        display:"block",
        border:"none"
       
      }} 
      >
        <Menu pointing secondary  >
          <Menu.Item>
          <a href="/"><img src={t}  alt= "logo" style={logoStyle}/></a>
          </Menu.Item>
          <Menu.Item className ="Style" name='Find All' href="/findAll" />
          <Menu.Item className ="Style" name='Post Tool' href="/postTool" />
          <Menu.Item className ="Style" name='Sign Up' href="/SignUp" />
          <Menu.Item className ="Style" name='Log In' href="/LogIn" /> 
          <Menu.Item style={inputStyle}>
            <div class="ui action input" >
                <input type="text" placeholder="Search..." />
                <button class="ui icon button">
                <i class="search icon"></i>
                </button>
            </div>
          </Menu.Item>    
        </Menu>
      </div>

    );
  }
}

export default NonhomepageNav;
