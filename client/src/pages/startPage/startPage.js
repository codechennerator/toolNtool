import React from "react";
import logo from "../../components/img/logo.png";
import {
  Container,
  Header,
  Image
} from 'semantic-ui-react'
import SearchForm from "../../components/Search"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"


// const HomepageHeading = ({ mobile }) => (
//   <Container fluid
//     style={{
//       textAlign: "center",
//       zIndex:"1",
      
//     }}>
//       <SearchForm />
//   </Container>
// )
const startPage = () => ( 
  <div>
    <Nav/>
     {/* <HomepageHeading /> */}
     <SearchForm/>
     <Footer/> 
  </div>
);

export default startPage;
