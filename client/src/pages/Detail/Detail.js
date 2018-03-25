import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'
// import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import NonhomepageNav from "../../components/NonhomepageNav/NonhomepageNav"
import Footer from "../../components/Footer/Footer"

const cardStyle = {
  position:"relative",
  top:"100px"
}

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
      <div>
        <NonhomepageNav/>
      <Card style={cardStyle}>
      <Image src={this.state.post.img} />
      <Card.Content>
        <Card.Header>
        {this.state.post.title} by {this.state.post.user}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
          {this.state.post.price}
          </span>
        </Card.Meta>
        <Card.Description>
        {this.state.post.description}
        </Card.Description>
      </Card.Content>
    </Card>
    <Footer/>
  </div>
    )
 
  }
}

export default (Detail);