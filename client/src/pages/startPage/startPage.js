import React from "react";
<<<<<<< HEAD
import SearchForm from "../../components/Search"
import logo from "../../components/img/logo.png"
import Footer from "../../components/Footer"
=======
import SearchForm from "../../components/Search";
import logo from "../../components/img/logo.png";


>>>>>>> 0c6f451caab3401a30e1c1da23264be693226198
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
     <a href = "https://www.google.com"> go to google</a>
     <Footer/> 
  </div>
);

export default startPage;
