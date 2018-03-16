import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Cards from "../../components/Cards"
import "./postTool.css"
import Searchinput from "../../components/Searchinput";
import Footer from "../../components/Footer"
import NonhomepageNav from "../../components/NonhomepageNav"
import { Redirect } from "react-router-dom";


class postTool extends Component {

  constructor() {
    super()
    this.state = {
      posts: [],
      title: "",
      user: "",
      description: "",
      image:"",
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
        img: this.state.image
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
      {/* <NonhomepageNav />
      <div class="row">
    <form class="col s6 ">
      <div class="row">
        <div class="input-field col s6">
          <input 
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            placeholder="Title (required)"
            id="title" type="text" class="validate"/>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
            <input 
              value={this.state.price}
              onChange={this.handleInputChange}
              name="price"
              placeholder="Price (required)"
              id="price" type="text" class="validate"/>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <textarea 
            value={this.state.description}
            onChange={this.handleInputChange}
            name="description"
            placeholder="Description (required)"
            id="descripton" class="materialize-textarea"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="file-field input-field">
          <div class="btn">
            <span>Upload the tool's picture</span>
            <input type="file"/>
          </div>
          <div class="file-path-wrapper">
          <input class="file-path validate" type="text"/>
        </div>
      </div>
        
    </div>
      <div class="row">
       <a class="waves-effect waves-light btn-large">Submit</a>
     </div>
    </form>
  </div>
 
        <Footer/> */}
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
