import React, { Component } from "react";

import { Menu } from 'semantic-ui-react'
import t from "../../components/img/t.jpg"



const Style={
  fontSize: '1.2em',
  fontWeight: 'normal',
  display:"inline-block",
  bottom:"15px"
}


const logoStyle={
  width:"50px",
  display:"inline-block",
  position:"relative",
  top:"4px"
  
}

class Nav extends Component {

  render() {

    return (
      <div 
      className="ui huge top fixed menu"
      style={{
        display:"block",
        border:"none"
       
      }} 
      >
        <Menu stackable pointing secondary >
          <Menu.Item>
          <a href="/"><img src={t}  alt="logo" style={logoStyle}/></a>
          </Menu.Item>
          <Menu.Item name='Find All' href="/findAll" style={Style}/>
          <Menu.Item name='Post Tool' href="/postTool" style={Style}/>
          <Menu.Item name='Sign Up' href="/SignUp" style={Style}/>
          <Menu.Item name='Log In' href="/LogIn" style={Style}/>
        </Menu>
      </div>

    );
  }
}

export default Nav;
