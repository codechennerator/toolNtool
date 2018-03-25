import React, { Component } from "react";
import SearchForm from "../Search"
import Input, { Menu } from 'semantic-ui-react'
import t from "../../components/img/t.jpg"
import Footer from "../../components/Footer"


const Style={
  fontSize: '1.2em',
  fontWeight: 'normal',
  display:"inline-block",
  bottom:"15px"
}

const inputStyle={
  display:"inline-block",
  position:"relative",
  bottom:"10px"
}
const logoStyle={
  width:"50px",
  display:"inline-block",
  position:"relative",
  top:"4px"
  
}

const navbar = {
  display:"block",
  position:"relative",
  left:"68%",
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
        <Menu stackable pointing secondary  >
          <Menu.Item>
          <a href="/"><img src={t}  style={logoStyle}/></a>
          </Menu.Item>
          <Menu.Item name='Find All' href="/findAll" style={Style}/>
          <Menu.Item name='Post Tool' href="/postTool" style={Style}/>
          <Menu.Item name='Sign Up' href="/SignUp" style={Style}/>
          <Menu.Item name='Log In' href="/LogIn" style={Style}/> 
          <Menu.Item>
            <div class="ui action input" style={inputStyle}>
                <input type="text" placeholder="Search..."style={inputStyle}/>
                <button class="ui icon button" style={inputStyle}>
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
