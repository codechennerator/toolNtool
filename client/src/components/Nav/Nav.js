import React, { Component } from "react";
import SearchForm from "../Search"
import { Menu } from 'semantic-ui-react'
import t2 from "../../components/img/t2.jpg"
import Footer from "../../components/Footer"


const Style={
  fontSize: '1.2em',
  fontWeight: 'normal',
  display:"inline-block",
  bottom:"10px"
}

const inputStyle={
  position:"absolute",
  right:"5%",
  top:"25%",
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
        <Menu pointing secondary  >
    
          <Menu.Item>
          <a href="/"><img src={t2}  style={logoStyle}/></a>
          </Menu.Item>
          <Menu.Item name='Find All' href="/findAll" style={Style}/>
          <Menu.Item name='Post Tool' href="/postTool" style={Style}/>
          <Menu.Item name='Sign Up' href="/SignUp" style={Style}/>
          <Menu.Item name='Log In' href="/LogIn" style={Style}/>
          <Menu.Item name='Test' href="/Test" style={Style}/>
          {/* </div> */}
          {window.location.href.slice(-1) !== "/" && 
          <div style={inputStyle}>
          
                <SearchForm />
               
                </div>
          }

        </Menu>
      </div>

    );
  }
}

export default Nav;
