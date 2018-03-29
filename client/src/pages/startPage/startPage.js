import React from "react";
<<<<<<< HEAD
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
=======
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
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
  </div>
);

export default startPage;
