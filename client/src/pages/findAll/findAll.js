import React, { Component } from "react";
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
    marginTop:"65px",
}

class findAll extends Component {

  componentWillMount() {
    
    this.props.dispatch(fetchAll())
  }

  render() {
    return (
      <Container style={mainDivStyle}>

      <Mapping />
          
    </Container>

    );
  }
}

export default connect(mapStateToProps)(findAll);
