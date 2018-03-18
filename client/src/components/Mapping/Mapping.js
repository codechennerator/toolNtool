import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'


let mapStateToProps = (store) => {
    return {
        data: store.data.data
    }
}

class Mapping extends Component {

    constructor() {
        super()
        this.state = {
            count: 10
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log(name, value)
        this.setState({
            [name]: Number(value)
        });
    };


    render() {
        const { data } = this.props;
        return (
            <div>
                <select name="count" onChange={this.handleInputChange}>
                    <option value="1">1</option>
                    <option selected="selected" value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="999">All</option>
                </select>
                {data.length !== 0 &&
                    <Card.Group>
                        {data.data.slice(0, this.state.count).map(post => (
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
        )
    }
}

export default connect(mapStateToProps)(Mapping);
