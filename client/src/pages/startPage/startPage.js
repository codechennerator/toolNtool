import React from "react";
import SearchForm from "../../components/Search"
import logo from "../../components/img/logo.png"
import Footer from "../../components/Footer"
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
      <SearchForm />
  </Container>
)
const startPage = () => ( 
  <div>
     <HomepageHeading />
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <Footer/> 
  </div>
);

export default startPage;
