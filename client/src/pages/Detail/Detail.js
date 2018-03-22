import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'
// import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";


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

    
  
      // <div class="col s12 m3 14">
      //   <div class="card">
      //      <div class="card-image">
      //        <img  src={this.state.post.img}/>
      //      </div>
      //           <div class="card-content">
      //            <p>{this.state.post.title} by {this.state.post.user}</p>
      //            <p>{this.state.post.price}</p>
      //            <p>{this.state.post.description}</p>
      //            <p><Link to="/findAll">← Back to Posts</Link></p>
      //           </div>
      // </div>
      // </div>
     
    )
 
  }
}

export default (Detail);