import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button, Header, Container} from 'semantic-ui-react'
// import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

const style = {
  container: {
    marginTop: '8em',
    marginBottom: '10em'
  },
  image: {
    marginBottom: '3em'
  },
};

const cardStyle = {
  position:"relative",
  top:"100px"
}

class Detail extends Component {
  state = {
    post: {}
  };

  componentDidMount() {
    if(this.props.match.params != undefined){
      API.getPost(this.props.match.params.id)
      .then(res =>{
        // console.log(res)
        this.setState({ post: res.data })
      })
      .catch(err => console.log(err));
    }
  };

  render() {
    console.log(this.state.post)
    return (
      <Container style={style.container}>
        <div className="postDetail">
          <Image src={this.state.post.img} size='large' alt={this.state.post.title} style={style.image} rounded />
          <p className="postTitle">{this.state.post.title}</p>
          <p>User: {this.state.post.user}</p>
          <p>Notes: {this.state.post.description}</p>
          <p/>
          <Link to="/findAll">Back to Posts</Link>
        </div>
      </Container>
    );
  
  }

};


export default Detail;