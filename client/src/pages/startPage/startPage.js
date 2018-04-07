import React, { Component } from 'react';
import SearchForm from "../../components/Search";
import { Container } from "semantic-ui-react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// const HomepageHeading = ({ mobile }) => (

// );
class startPage extends Component{
  
  render(){
    return (
      <div>
      <SearchForm location = {this.props.location}/>
      </div>
    );
  }
}

export default startPage;
