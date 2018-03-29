import React, { Component } from "react";
import { connect } from "react-redux";
<<<<<<< HEAD
import Mapping from "../../components/Mapping"
=======
import { Container } from 'semantic-ui-react'
import Mapping from "../../components/Mapping"
import NonhomepageNav from "../../components/NonhomepageNav/NonhomepageNav"
import Footer from "../../components/Footer/Footer"
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a

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
<<<<<<< HEAD
      <div style={mainDivStyle}>
      <Mapping />
      </div>
=======
      <div>
      <Container style={mainDivStyle}>
      <NonhomepageNav/>
      <Mapping />
    
    </Container>
    <Footer/>  
    </div>
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
    )
  }
}

export default connect(mapStateToProps)(findTool);
