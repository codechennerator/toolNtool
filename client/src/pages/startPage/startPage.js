import React, { Component } from 'react';
import SearchForm from "../../components/Search";
import { Container } from "semantic-ui-react";

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
