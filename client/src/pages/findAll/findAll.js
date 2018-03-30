import React, { Component } from "react";
import { fetchAll } from "../../actions/dataAction"
import { connect } from "react-redux";
import Mapping from "../../components/Mapping"
import { Container } from 'semantic-ui-react'
import NonhomepageNav from "../../components/NonhomepageNav/NonhomepageNav"
import Footer from "../../components/Footer/Footer"



let mapStateToProps = (store) => {
  return {
    data: store.data.data
  }
}

const mainDivStyle={
    marginTop:"100px",
    marginBottom:"20px"
}

class findAll extends Component {

  componentWillMount() {
    
    this.props.dispatch(fetchAll())
  }

  render() {
    return (
     <div>
      <Container style={mainDivStyle}>
      <NonhomepageNav/>
      <Mapping />
    
    </Container>
    <Footer/>  
    </div>
   );
  }
}

export default connect(mapStateToProps)(findAll);
