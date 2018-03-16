import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { fetchDataSelected } from "../../actions/dataAction"
import { connect } from "react-redux";

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

            {data.length !==0 &&
              <List>
                {data.data.map(post => (
                  <ListItem key={post._id}>
                    <a href={"/findTool/"+post._id}>
                      <strong>
                        {post.title} by {post.user}
                      </strong>
                    </a>

                  </ListItem>
                ))}
              </List>
            }
            {data.length ===0 &&
              <h3>No Results to Display</h3>
            }

          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(findTool);
