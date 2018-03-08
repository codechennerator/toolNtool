import React from "react";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';


class Nav extends React.Component{

  render() {
    return(
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text = "ToolNTool" />
        </ToolbarGroup>
        <ToolbarGroup firstChild = {false}>
          <RaisedButton label = "Find Tool" />
          <RaisedButton label = "Post Tool" />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}



    
  // <nav className="navbar navbar-inverse navbar-top">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  //       <a href="/" className="navbar-brand">
  //         Tool N Tool
  //       </a>

  //       <a href="/findTool" className="navbar-brand">
  //         find Tool
  //       </a>

  //       <a href="/postTool" className="navbar-brand">
  //         post Tool
  //       </a>

  //     </div>
  //   </div>
  // </nav>


export default Nav;
