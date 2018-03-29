import React, { Component } from "react";
<<<<<<< HEAD
import { fetchAll } from "../../actions/dataAction"
import { connect } from "react-redux";
import Mapping from "../../components/Mapping"
import { Container } from 'semantic-ui-react'



let mapStateToProps = (store) => {
  return {
    data: store.data.data
  }
}

const mainDivStyle={
    marginTop:"60px",
}

class findAll extends Component {

  componentWillMount() {
    
    this.props.dispatch(fetchAll())
=======
import { fetchAll } from "../../actions/dataAction";
import { connect } from "react-redux";
import Mapping from "../../components/Mapping";
import { Container } from "semantic-ui-react";
import NonhomepageNav from "../../components/NonhomepageNav/NonhomepageNav";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

let mapStateToProps = store => {
  return {
    data: store.data.data
  };
};

const mainDivStyle = {
  marginTop: "100px",
  marginBottom: "100px"
};

class findAll extends Component {
  componentWillMount() {
    this.props.dispatch(fetchAll());
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
  }

  render() {
    return (
<<<<<<< HEAD
      <Container style={mainDivStyle}>

      <Mapping />
          
    </Container>

=======
      <div>
         <NonhomepageNav />
        <Container style={mainDivStyle}>
          <Mapping />
        </Container>
        <Footer />
      </div>
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
    );
  }
}

export default connect(mapStateToProps)(findAll);
