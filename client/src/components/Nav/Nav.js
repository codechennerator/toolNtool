import React, { Component } from "react";
import SearchForm from "../Search"
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';


const fontStyle={
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

  renderContent(){
    switch(this.props.user){
      case null:
        return;
      case false:
        return(
          <Menu.Item name='Login' href="/auth/google" style={fontStyle} />
        );
      default:
        return(
          <Menu.Item name='Logout' href='/auth/logout' style={fontStyle} />
        );
    }
  }
  render() {

    return (
      <div 
      className="ui huge top fixed menu"
      style={{
        display:"block",
        border:"none"
       
      }} 
      >
        <Menu pointing secondary >

          <Menu.Item name='Tool N Tool' href="/" style={fontStyle}/>
          <Menu.Item name='find All' href="/findAll" style={fontStyle}/>
          <Menu.Item name='post Tool' href="/postTool" style={fontStyle}/>
          {this.renderContent()}
          {/* <Menu.Item name='Login' href="/auth/google" style={fontStyle} />
          <Menu.Item name='Logout' href='/auth/logout' style={fontStyle} /> */}
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

function mapStateToProps({user}){
  return { user };
}
export default connect(mapStateToProps)(Nav);
