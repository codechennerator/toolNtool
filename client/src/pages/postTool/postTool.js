import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";


class postTool extends Component {

  constructor() {
    super()
    this.state = {
      posts: [],
      title: "",
      user: "",
      description: "",
      image: "",
      location: "",
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.user) {
      API.savePost({
        title: this.state.title,
        user: this.state.user,
        description: this.state.description,
        img: this.state.image,
        location: this.state.location,
      })
        .then(res => {
          window.location.href = "/"
        })
        .catch(err => console.log(err));
    }
  };

  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">

            <h1>Post your tools</h1>

            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.user}
                onChange={this.handleInputChange}
                name="user"
                placeholder="User (required)"
              />
              <Input
                value={this.state.image}
                onChange={this.handleInputChange}
                name="image"
                placeholder="Image link (optional)"
              />

              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location: City, State (required)"
              />

              <TextArea
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <FormBtn
                disabled={!(this.state.user && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Post
              </FormBtn>
            </form>
          </Col>


        </Row>
      </Container>
    );
  }
}

export default postTool;
