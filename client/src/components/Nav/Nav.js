import React, {Component} from "react";
import API from "../../utils/API";

class Nav extends Component {

  constructor(){
    super()
    this.state = {
      term: ""
    };
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name,value)
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.getPostByTitle(this.state.term)
        .then(res=>{
          console.log(res)
        })
        .catch(err => console.log(err));
    }


  render() {
    return(    
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
          <input name="term" onChange={this.handleInputChange} type="text"/>
          <button onClick={this.handleFormSubmit}>Submit</button>

          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
