import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import startPage from "./pages/startPage";
import findTool from "./pages/findTool";
import findAll from "./pages/findAll";
import postTool from "./pages/postTool";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
<<<<<<< HEAD
import Footer from "./components/Footer"
=======
import * as userActions from "./actions/userAction";
>>>>>>> 0c6f451caab3401a30e1c1da23264be693226198

class App extends Component{
  componentDidMount(){
    this.props.fetchUser();
  }
  
<<<<<<< HEAD
  <Router>
    <div>
    <Nav />    
      <Switch>
        <Route exact path="/" component={startPage} />
        <Route exact path="/findAll" component={findAll} />
        <Route exact path="/findTool" component={findTool} />
        <Route exact path="/findTool/:id" component={Detail} />
        <Route exact path="/postTool" component={postTool} />
        {/* <Route component={NoMatch} /> */}
      </Switch>   
    </div>
  </Router>
  </div>
);

export default App;
=======
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
>>>>>>> 0c6f451caab3401a30e1c1da23264be693226198
