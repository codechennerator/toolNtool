import React from "react";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">
          Tool N Tool
        </a>

        <a href="/findTool" className="navbar-brand">
          find Tool
        </a>

        <a href="/postTool" className="navbar-brand">
          post Tool
        </a>

      </div>
    </div>
  </nav>
);

export default Nav;
