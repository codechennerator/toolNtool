import React, { Component } from "react";
import SearchForm from "../Search"
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';


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
        display:"block"
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
