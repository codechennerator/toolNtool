import React, { Component } from "react";
import { connect } from "react-redux";
import Mapping from "../../components/Mapping"

let mapStateToProps = (store) => {
  return {
    data: store.data.data
  }
}

const mainDivStyle = {
  marginTop: "65px",
}

class findTool extends Component {

  render() {

    return (
      <div style={mainDivStyle}>
      <Mapping />
      </div>
    )
  }
}

export default connect(mapStateToProps)(findTool);
