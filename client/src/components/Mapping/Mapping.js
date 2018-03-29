import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Button, Header, Icon, Image, Divider, Container, Card, } from 'semantic-ui-react';


const style = {
    container: {
      marginTop: '8em',
      marginBottom: '10em'
    },
    image: {
      marginBottom: '3em'
    },
  };
=======
import { Card, Image } from 'semantic-ui-react'
import Button from "../Button/Button"


>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a

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
<<<<<<< HEAD
            <Container style = {style.container}>
=======
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
            <div>
                <select name="count" onChange={this.handleInputChange}>
                    <option value="1">1</option>
                    <option selected="selected" value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="999">All</option>
                </select>
<<<<<<< HEAD
                <p/>
=======
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
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
<<<<<<< HEAD
                                            {post.user != null ? post.user.name.givenName : null}
=======
                                            {post.user}
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
                                        </Card.Meta>
                                        <Card.Description>
                                            {post.description}
                                            <strong>${post.price}</strong>
                                        </Card.Description>
<<<<<<< HEAD
                                    </Card.Content>
                            </Card>

                            ))}
                        </Card.Group>
                    }
                    {data.length === 0 &&
                        <h3>No Results to Display</h3>
                    }
                </div>
            </Container>
=======
                                        <Button/>
                                    </Card.Content>
                            </Card>

                        ))}
                    </Card.Group>
                }
                {data.length === 0 &&
                    <h3>No Results to Display</h3>
                }
            </div>
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
        )
    }
}

export default connect(mapStateToProps)(Mapping);
