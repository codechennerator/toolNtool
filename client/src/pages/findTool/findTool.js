import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";


class findTool extends Component {
  state = {
    posts: [],
    title: "",
    user: "",
    description: ""
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data, title: "", user: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.posts)
    return (
      <Container fluid>
        <Row>

          <Col size="md-6 sm-12">

              <h1>Posts on the List</h1>

            {this.state.posts.length ? (
              <List>
                {this.state.posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/findTool/" + post._id}>
                      <strong>
                        {post.title} by {post.user}
                      </strong>
                    </Link>

                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default findTool;
