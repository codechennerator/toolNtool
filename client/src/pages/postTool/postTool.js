import React, { Component } from "react";
import API from "../../utils/API";
import { Form, TextArea, Container, Button, Input, Divider } from 'semantic-ui-react'
<<<<<<< HEAD
import { connect } from 'react-redux';
import PostModal from "../../components/PostModal";
import Detail from '../Detail/Detail';
=======

import NonhomepageNav from "../../components/NonhomepageNav/NonhomepageNav"
import Footer from "../../components/Footer/Footer"


const mainDivStyle = {
  marginTop: "100px",
}
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a

const mainDivStyle = {
  marginTop: "100px",
}

function mapStateToProps({user}){
  return { user };
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
<<<<<<< HEAD
      // this.props.user !== false &&
=======
      this.state.user !=="" &&
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
      this.state.description !=="" &&
      this.state.image !=="" &&
      this.state.location !==""){
      API.savePost({
        title: this.state.title,
<<<<<<< HEAD
        user: this.props.user._id,
=======
        user: this.state.user,
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
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
<<<<<<< HEAD
      console.log(this.props.user);
=======
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
      alert("Please insert all information")
    }
  };

  handleKeyPress(target) {
    if (target.charCode === 13) {
        this.handleFormSubmit()
    }
}
<<<<<<< HEAD
=======

  render() {
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a

  render() {
    // console.log(this.state)
    return (
<<<<<<< HEAD

=======
      <div>
      <NonhomepageNav/>
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
      <Container style={mainDivStyle}>
        <h1>Post your tools</h1>
        <label>All Fields are required</label>
        <Divider hidden />

        <Form>
          <Form.Field>
            <label>Post Title</label>
            <Input
              value={this.state.title}
<<<<<<< HEAD
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title"
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
=======
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
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
              name="description"
              placeholder="Description"
            />
          </Form.Field>

<<<<<<< HEAD
          {/* <Button            
            onClick={this.handleFormSubmit}
            onKeyPress={this.handleKeyPress.bind(this)}>
            Submit
          </Button> */}
          <PostModal info={this.state} user = {this.props.user}/>
        </Form>

      </Container>

=======
          <Button            
            onClick={this.handleFormSubmit}
            onKeyPress={this.handleKeyPress.bind(this)}
          >
            Submit Post
              </Button>
        </Form>

      </Container>
      <Footer/>
      </div>
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
    );
  }
}



export default connect(mapStateToProps)(postTool);
