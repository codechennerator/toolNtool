import React, { Component } from 'react';
import SearchForm from "../../components/Search";
import { Container } from "semantic-ui-react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Testmonials from "../../components/Testmonials/Testmonials"
// const HomepageHeading = ({ mobile }) => (

// );
class startPage extends Component{
  
  render(){
    return (
      <div>
      <SearchForm location = {this.props.location}/>
      {/* <Testmonials /> */}
      </div>
    );
  }
}

export default startPage;
