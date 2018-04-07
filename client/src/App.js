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
import Protected from "./components/PrivateRoute";
import NoMatch from "./pages/NoMatch";
import Inbox from "./pages/Inbox";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import * as userActions from "./actions/userAction";

const style = {
  appContent: {
  maxHeight: 1024,
  maxWidth: 1440,
  width: "100%",
  height: "100%",
},
  footer: {
    position: "relative",
    left: 0,
    bottom: 0,
    width: "100%"
  }
}

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    console.log("user info")
    console.log(this.props.user)
  }

  render() {
    return (
      <div className="app">
        <div className="appContent" style={style.appContent}>
        <Router>
          <div className="router">
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
        </div>
        <div className="footer" style={style.footer}>
        <Footer />
        </div>
      </div>
    );
  }
}
export default connect(null, userActions)(App);
