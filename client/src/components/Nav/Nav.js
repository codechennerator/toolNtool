import React, { Component } from "react";
import SearchForm from "../Search"
import { Menu } from 'semantic-ui-react'


const fontStyle={
  fontSize: '1.5em',
  fontWeight: 'normal',
}

const inputStyle={
  position:"absolute",
  right:"5%",
  top:"15%",
}

class Nav extends Component {

  render() {

    return (
      <div 
      className="ui huge top fixed menu"
      style={{
        display:"block"
      }} 
      >
        <Menu pointing secondary >

          <Menu.Item name='Tool N Tool' href="/" style={fontStyle}/>
          <Menu.Item name='find All' href="/findAll" style={fontStyle}/>
          <Menu.Item name='post Tool' href="/postTool" style={fontStyle}/>

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
