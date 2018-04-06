import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import Mapping from "../../components/Mapping";

let mapStateToProps = store => {
  return {
    data: store.data.data
  };
};

const mainDivStyle = {
  marginTop: "100px"
};

class findTool extends Component {

  render() {
    return (
      <div>
        <Container style={mainDivStyle}>
          <Mapping />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps)(findTool);
