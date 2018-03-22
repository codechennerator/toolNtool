import React, { Component } from "react";
import API from "../../utils/API";
import { Form, TextArea, Container, Button, Input, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux';

const mainDivStyle = {
  marginTop: "65px",
}

class postTool extends Component {

  constructor() {
    super()
    this.state = {
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
    if (
      this.state.title !=="" && 
      this.state.user !=="" &&
      this.state.description !=="" &&
      this.state.image !=="" &&
      this.state.location !==""){
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
    else{
      alert("Please insert all information")
    }
  };

  handleKeyPress(target) {
    if (target.charCode === 13) {
        this.handleFormSubmit()
    }
}

  render() {

    return (

      <Container style={mainDivStyle}>
        <h1>Post your tools</h1>
        <label>All Fields are required</label>
        <Divider hidden />

        <Form>
          <Form.Field>
            <label>Post Title</label>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title"
              size="big"
            />
          </Form.Field>
          <Form.Field>
            <label>User Name</label>
            <Input
              value={this.state.user}
              onChange={this.handleInputChange}
              name="user"
              placeholder="User"
              size="big"
            />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <Input
              value={this.state.image}
              onChange={this.handleInputChange}
              name="image"
              placeholder="Image link"
              size="big"
            />
          </Form.Field>
          <Form.Field>
            <label>Item Location</label>
            <Input
              value={this.state.location}
              onChange={this.handleInputChange}
              name="location"
              placeholder="Location: (Example: City, State)"
              size="big"
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <TextArea
              style={{ minHeight: 100 }}
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
              placeholder="Description"
            />
          </Form.Field>

          <Button            
            onClick={this.handleFormSubmit}
            onKeyPress={this.handleKeyPress.bind(this)}
          >
            Submit Post
              </Button>
        </Form>

      </Container>
    );
  }
}

function mapStateToProps({user}){
  return { user };
}

export default connect(mapStateToProps)(postTool);
