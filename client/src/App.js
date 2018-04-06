import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import startPage from "./pages/startPage";
import findTool from "./pages/findTool";
import findAll from "./pages/findAll";
import postTool from "./pages/postTool";
import Detail from "./pages/Detail/Detail"
import Messages from "./pages/Messages";
import NoMatch from "./pages/NoMatch";
import Inbox from "./pages/Inbox";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
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
            <Switch>
              <Route exact path="/" component={startPage} />
              <Route exact path="/findAll" component={findAll} />
              <Route exact path="/findTool" component={findTool} />
              <Route exact path="/findTool/:id" component={Detail} />
              <Route exact path="/signIn" component = {SignIn} />
              <PrivateRoute exact path="/postTool" component={postTool} />
              <PrivateRoute exact path="/inbox" component = {Inbox} />
              <PrivateRoute exact path="/messages/:cid" component={Messages} />
              <PrivateRoute exact path="/dashboard" component = {Dashboard} />
              <Route component={NoMatch} />
            </Switch>   
          </div>
        </Router>
        <br/>
        <br/>
        <Footer />
        </div>
      );
  }
}
export default connect(null, userActions)(App);
