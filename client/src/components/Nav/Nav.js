import React, { Component } from "react";
import SearchForm from "../Search"
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';
import t from "../../components/img/t.jpg"



const fontStyle={
  fontSize: '1.2em',
  fontWeight: 'normal',
  display:"inline-block",
  bottom:"15px"
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
          <Menu.Item>
            <a href="/"><img src={t} alt="logo" style={logoStyle}/></a>
          </Menu.Item>
          <Menu.Item name='find All' href="/findAll" style={fontStyle}/>
          <Menu.Item name='post Tool' href="/postTool" style={fontStyle}/>
          <Menu.Item name='Inbox' href="/inbox" style={fontStyle}/>
          {this.renderContent()}
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
