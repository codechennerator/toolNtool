import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Container } from 'semantic-ui-react'
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

class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    this.getDetail();
  };
  getDetail= () => {
    if(this.props.match.params !== undefined){
      API.getPost(this.props.match.params.id)
      .then(res =>{
        this.setState({ post: res.data })
      })
      .catch(err => console.log(err));
    }
  }

  render() {
    console.log(this.state.post)
    return (
      <Container style={style.container}>
        <div className="postDetail">
          <Image src={this.state.post.img} size='large' alt={this.state.post.title} style={style.image} rounded />
          <p className="postTitle">{this.state.post.title}</p>
          <p>Owner: {(this.state.post.user) ? this.state.post.user.name.givenName : null}</p>
          <p>Notes: {this.state.post.description}</p>
          <p/>
          <Link to="/findAll">Back to Posts</Link>
        </div>
      </Container>
    );
  };
}

export default Detail;
