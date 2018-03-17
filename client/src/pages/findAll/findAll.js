import React, { Component } from "react";
import { List, ListItem } from "../../components/List";
import { fetchAll } from "../../actions/dataAction"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'
import "./findAll.css"



let mapStateToProps = (store) => {
  return {
    data: store.data.data
  }
}

class findAll extends Component {

  componentWillMount() {
    this.props.dispatch(fetchAll())
  }

  render() {
    const { data } = this.props;
    return (

      <div className="mainDiv">
            <h1>Posts on the List</h1>


            {data.length !== 0 &&
                    <Card.Group>
                    {data.data.map(post => (
                        <Card key={post._id}>
                        <Link to={"/findTool/"+post._id}>
                            <Image floated='right' size='medium' src={post.img} />
                            </Link>
                                <Card.Content>
                                    <Card.Header>
                                        {post.title}
                                    </Card.Header>
                                    <Card.Meta>
                                        {post.user}
                                    </Card.Meta>
                                    <Card.Description>
                                        {post.description}
                                        <strong>${post.price}</strong>
                                    </Card.Description>
                                </Card.Content>
                        </Card>

                    ))}
                </Card.Group>
            }
            {data.length === 0 &&
              <h3>No Results to Display</h3>
            }
            </div>
    );
  }
}

export default connect(mapStateToProps)(findAll);
