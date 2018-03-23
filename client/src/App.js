import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import startPage from "./pages/startPage";
import findTool from "./pages/findTool";
import findAll from "./pages/findAll";
import postTool from "./pages/postTool";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import * as userActions from "./actions/userAction";

class App extends Component{
  componentDidMount(){
    this.props.fetchUser();
  }
  
  render(){
      return(
        <div>
        
        <Router>
          <div>
          <Nav />
            {/*Switch seems like its causing some weird behavior for my login. Consider getting rid of it?*/}    
            <Switch>
              <Route exact path="/" component={startPage} />
              <Route exact path="/findAll" component={findAll} />
              <Route exact path="/findTool" component={findTool} />
              <Route exact path="/postTool" component={postTool} />
              {/* <Route component={NoMatch} /> */}
            </Switch>   
          </div>
        </Router>
        </div>
      );
  }
}
export default connect(null, userActions)(App);
