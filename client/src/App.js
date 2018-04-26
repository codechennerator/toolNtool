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

import testPage from './pages/test'

const style = {
  app: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },
  appContent: {
    flex: 1
  },
  footer: {
    left: 0,
    width: "100%",
  }
}

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="app" style={style.app}>
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
              <Route exact path="/test" component = {testPage} />
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
