import React, { Component } from "react";
import SearchForm from "../Search";
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TNTLogo from "../../components/img/3DLogo.png";
import PrivateRoute from "../PrivateRoute";

const fontStyle={
  fontSize: '1.2em',
  fontWeight: 'normal',
  display:"inline-block",
  top: "0.1px",
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
          <Menu.Item as= {Link} name='Login' to="/signIn" style={fontStyle} />
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
        <Menu pointing secondary style= {{padding: "5px"}}>
          <Menu.Item as={Link} name = "home" to="/">
            <img src={TNTLogo} alt="logo" style={logoStyle}/>
          </Menu.Item>
          <Menu.Item as={Link} name='find All' to="/findAll" style={fontStyle}/>
          <Menu.Item as={Link} name='post Tool' to="/postTool" style={fontStyle}/>
          <Menu.Item as={Link} name='Inbox' to="/inbox" style={fontStyle}/>
          <Menu.Item as={Link} name='Dashboard' to="/dashboard" style={fontStyle}/>
          {this.renderContent()}

          <div style={inputStyle}>
          
            
            <SearchForm />
            
              
          </div>

        </Menu>
      </div>

    );
  }
}

let mapStateToProps = (store) => {
  return {
      geoInfo: store.data.geoInfo,
      user: store.user,
      isGeoStored: store.data.isGeoStored,
  }
}
export default connect(mapStateToProps)(Nav);
