import React, {Component} from "react";
import SearchForm from "../Search"


class Nav extends Component {

  render() {
    return(    
      <nav className="navbar navbar-inverse navbar-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">
              Tool N Tool
        </a>

            <a href="/findAll" className="navbar-brand">
              find All
        </a>

            <a href="/postTool" className="navbar-brand">
              post Tool
        </a>
        <SearchForm />

          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
