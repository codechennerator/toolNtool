import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { fetchDataSelected } from "../../actions/dataAction"
import { connect } from "react-redux";
import Mapping from "../../components/Mapping"

let mapStateToProps = (store) => {
  return {
      data: store.data.data
  }
}

class findTool extends Component {  

  fetchDataSelected(id) {
    this.props.dispatch(fetchDataSelected(id).bind(this))
}

  render() {
    const {data} = this.props;
    return (
      <Container fluid>
        <Row>

          <Col size="md-6 sm-12">

              <h1>Posts on the List</h1>

              <Mapping />

          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(findTool);
