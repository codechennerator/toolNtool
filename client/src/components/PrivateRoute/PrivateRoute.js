import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (store) => {
    return {
        user: store.user
    }
  }
class PrivateRoute extends Component {
    render() {
       const {component: Component, ...rest} = this.props;

       return (
           <Route {...rest} render={props => {
               switch(this.props.user){
                  case false:
                    return(
                        <Redirect to={{
                            pathname: '/signIn', 
                            state: {from: props.location }
                        }}/>
                    )
                  default:
                    return(
                        <Component {...props}/>
                    )
               }
         }}/>
       );
    }
}

export default connect(mapStateToProps)(PrivateRoute);