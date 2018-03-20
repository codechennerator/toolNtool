import React from "react";
import SearchForm from "../../components/Search";
import logo from "../../components/img/logo.png";


import {
  Container,
  Header,
  Image
} from 'semantic-ui-react'


const HomepageHeading = ({ mobile }) => (
  <Container fluid
    style={{
      textAlign: "center",
      zIndex:"1",
      
    }}>
    <Header
      as='h1'
      content='Welcome to Tool N Tool'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        color:"black"
      }}
    />
    <Header
      as='h2'
      content='Search any tool you need'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        color:"black"

      }}
    />

      <SearchForm />
      
  </Container>
)


const startPage = () => (

  <div>
    <HomepageHeading />
    <Image src={logo} size='medium' centered />
  </div>


);

export default startPage;
