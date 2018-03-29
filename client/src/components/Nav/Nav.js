import React, { Component } from "react";
<<<<<<< HEAD
import SearchForm from "../Search"
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';
import t2 from "../../components/img/t2.jpg"
import Footer from "../../components/Footer"


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
=======

import { Menu } from 'semantic-ui-react'
import t from "../../components/img/t.jpg"



const Style={
  fontSize: '1.2em',
  fontWeight: 'normal',
  display:"inline-block",
  bottom:"15px"
}


>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
const logoStyle={
  width:"50px",
  display:"inline-block",
  position:"relative",
  top:"4px"
  
}

<<<<<<< HEAD
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
=======
class Nav extends Component {

>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
  render() {

    return (
      <div 
      className="ui huge top fixed menu"
      style={{
        display:"block",
        border:"none"
       
      }} 
      >
<<<<<<< HEAD
        <Menu pointing secondary >
          <Menu.Item>
            <a href="/"><img src={t2}  style={logoStyle}/></a>
          </Menu.Item>
          <Menu.Item name='Tool N Tool' href="/" style={fontStyle}/>
          <Menu.Item name='find All' href="/findAll" style={fontStyle}/>
          <Menu.Item name='post Tool' href="/postTool" style={fontStyle}/>
          <Menu.Item name='Inbox' href="/inbox" style={fontStyle}/>
          {this.renderContent()}
          {window.location.href.slice(-1) !== "/" && 
          <div style={inputStyle}>
          
                <SearchForm />
               
                </div>
          }

=======
        <Menu stackable pointing secondary >
          <Menu.Item>
          <a href="/"><img src={t}  alt="logo" style={logoStyle}/></a>
          </Menu.Item>
          <Menu.Item name='Find All' href="/findAll" style={Style}/>
          <Menu.Item name='Post Tool' href="/postTool" style={Style}/>
          <Menu.Item name='Sign Up' href="/SignUp" style={Style}/>
          <Menu.Item name='Log In' href="/LogIn" style={Style}/>
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
        </Menu>
      </div>

    );
  }
}

<<<<<<< HEAD
function mapStateToProps({user}){
  return { user };
}
export default connect(mapStateToProps)(Nav);
=======
export default Nav;
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
