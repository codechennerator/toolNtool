import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import startPage from "./pages/startPage";
import allTools from "./pages/allTools";
import postTool from "./pages/postTool";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import signUp from "./pages/signUp";
import signIn from "./pages/signIn";

const App = () => (
  <Router>
    <div>
   
      <Switch>
        <Route exact path="/" component={startPage} />
        <Route exact path="/allTools" component={allTools} />
        <Route exact path="/findTool/:id" component={Detail} />
        <Route exact path="/postTool" component={postTool} />
        <Route exact path="/signIn" component={signIn} />
        <Route exact path="/signUp" component={signUp} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
