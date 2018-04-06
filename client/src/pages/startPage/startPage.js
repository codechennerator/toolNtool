import React, { Component } from 'react';
import SearchForm from "../../components/Search";
import { Container } from "semantic-ui-react";

// const HomepageHeading = ({ mobile }) => (

// );
class startPage extends Component{
  

  render(){
    return (
      <div>
        <Container
          fluid
          style={{
            textAlign: "center",
            zIndex: "1"
          }}
      >
    <SearchForm location = {this.props.location}/>
  </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default startPage;
