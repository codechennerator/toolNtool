import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";


class Detail extends Component {
  state = {
    post: {}
  };

  componentDidMount() {
    API.getPost(this.props.match.params.id)
      .then(res =>{
        // console.log(res)
        this.setState({ post: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.post)
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">

              <h1>
                {this.state.post.title} by {this.state.post.user}
              </h1>

          </Col>
        </Row>

        <Row>
          <Col size="md12">
          
          <img alt={this.state.post.title} src={this.state.post.img} />

          </Col>
          </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h3>Description</h3>
              <h4>
                {this.state.post.description}
              </h4>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/findAll">← Back to Posts</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default (Detail);