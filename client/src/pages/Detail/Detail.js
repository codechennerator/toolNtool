import React, { Component } from "react";
<<<<<<< HEAD
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
=======

import { Card, Image } from "semantic-ui-react";
// import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import NonhomepageNav from "../../components/NonhomepageNav/NonhomepageNav";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

const cardStyle = {
  position: "relative",
  top: "100px",
  paddingBottom: "10px"
};
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a

class Detail extends Component {
  state = {
    post: {}
  };

  componentDidMount() {
<<<<<<< HEAD
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
=======
    API.getPost(this.props.match.params.id)
      .then(res => {
        // console.log(res)
        this.setState({ post: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.post);
    return (
      <div>
        <NonhomepageNav />
        <div class="ui centered card" style={{ minHeight: "550px" }}>
          <Card style={cardStyle}>
            <Image src={this.state.post.img} />
            <Card.Content>
              <Card.Header>
                {this.state.post.title} by {this.state.post.user}
              </Card.Header>
              <Card.Meta>
                <span className="date">{this.state.post.price}</span>
              </Card.Meta>
              <Card.Description>{this.state.post.description}</Card.Description>
            </Card.Content>
            <Button />
          </Card>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Detail;
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
