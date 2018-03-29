import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from 'semantic-ui-react'
import Mapping from "../../components/Mapping"
import NonhomepageNav from "../../components/NonhomepageNav/NonhomepageNav"
import Footer from "../../components/Footer/Footer"

let mapStateToProps = (store) => {
  return {
    data: store.data.data
  }
}

const mainDivStyle = {
  marginTop: "100px",
}

class findTool extends Component {

  render() {

    return (
      <div>
      <Container style={mainDivStyle}>
      <NonhomepageNav/>
      <Mapping />
    
    </Container>
    <Footer/>  
    </div>
    )
  }
}

export default connect(mapStateToProps)(findTool);
