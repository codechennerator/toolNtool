import React, { Component } from "react";
import SearchForm from "../Search";
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { _getLocation } from '../../actions/getActions';
import Ionicon from 'react-ionicons';



let mapStateToProps = (store) => {
  return {
    geoInfo: store.data.geoInfo,
    user: store.user,
    isGeoStored: store.data.isGeoStored,
    isHomePage: store.data.isHomePage
  }
}

const fontStyle = {
  fontSize: '1.2em',
  fontWeight: 'bold',
  fontFamily: "'Open Sans', sans-serif",
  display:"inline-block",
  top: "0.1px",
}

const inputStyle={
  maxHeight: "500px",
  marginTop: "10px"
}

const logoStyle = {
  width: "50px",
  display: "inline-block",
  position: "relative",
  top: "4px"

}


class Nav extends Component {

  // componentDidMount(){
  //   if(!this.props.isGeoStored && this.props.user !==null){
  //     _getLocation()
  //   }
  // }

  renderContent() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <Menu.Item as={Link} name='Login' to="/signIn" style={fontStyle} />
        );
      default:
        return (
          <div style={{marginTop:"5px"}}>
            <Menu.Item as={Link} name='post Tool' to="/postTool" style={fontStyle} />
            <Menu.Item as={Link} name='Inbox' to="/inbox" style={fontStyle} />
            <Menu.Item as={Link} name='Dashboard' to="/dashboard" style={fontStyle} />
            <Menu.Item name='Logout' href='/auth/logout' style={fontStyle} />
          </div>
        );
    }
  }

  render() {

    if(!this.props.isGeoStored && this.props.user !==null){
      _getLocation()
    }

    return (
      <div 
      className="ui huge top fixed menu"
      style={{
        display:"block",
        border:"none",
        boxShadow: "none"
      }} 
      >
        <Menu secondary style={{padding: "7px", marginLeft:"auto", marginRight:"auto", width:"50%"}}>
          <Menu.Item as={Link} name = "home" to="/">
            <Ionicon icon="ios-construct-outline" fontSize="30px" />
          </Menu.Item>
          <Menu.Item as={Link} name='find All' to="/findAll" style={fontStyle} />

          {this.renderContent()}

        {!this.props.isHomePage &&
          <div style = {inputStyle}>
            <SearchForm />
          </div>
        }
        </Menu>
      </div>

    );
  }
}


export default connect(mapStateToProps)(Nav);
