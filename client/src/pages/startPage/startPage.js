import React, { Component } from 'react';
import SearchForm from "../../components/Search";
import { Container } from "semantic-ui-react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as dataActions from '../../actions/dataAction';
// import Testmonials from "../../components/Testmonials/Testmonials"
// const HomepageHeading = ({ mobile }) => (

// );

class startPage extends Component{
  componentDidMount(){
    this.props.isHome();
  }
  componentWillUnmount(){
    this.props.leftHome();
  }
  render(){
    return (
      <div>
      
      <SearchForm location = {this.props.location}/>
      {/* <Testmonials /> */}
      </div>
    );
  }
}

export default connect(null, dataActions)(startPage);
