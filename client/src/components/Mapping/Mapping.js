import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ButtonModal from "../ButtonModal"
import { Image, Container, Card, } from 'semantic-ui-react';
import LoginPlease from "../../components/LoginPlease";


const style = {
    container: {
      marginTop: "100px",
      marginBottom: "40px"
    },
    image: {
      marginBottom: '3em'
    },
    cardContainer: {
        marginTop: '10px'
    }
  };


let mapStateToProps = (store) => {
    return {
        data: store.data.data,
        user: store.user
    }
}

class Mapping extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 10
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: Number(value)
        });
    };


    render() {
        const { data } = this.props;
        return (
            <Container style = {style.container}>
            {(!this.props.user) && <LoginPlease content ='You will not be able to contact any of these tool owners without first creating an account!'/>}
            <h1 style={{color: "#5c7aff", fontFamily: "'Ubuntu', sans-serif"}}>Posts</h1>
            <div className="counterContainer">
                <select name="count" onChange={this.handleInputChange}>
                    <option value="1">1</option>
                    <option selected="selected" value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="999">All</option>
                </select>
            </div>
            <div className="cardContainer" style={style.cardContainer}>
                {data.length !== 0 &&
                    <Card.Group>
                        {data.data.slice(0, this.state.count).map(post => {
                            return(
                            <Card key={post._id}>
                            <Link to={"/findTool/"+post._id}>
                                <Image floated='right' size='medium' src={post.img} style={{height: "245px"}}/>
                                </Link>
                                    <Card.Content>
                                        <Card.Header style = {{fontFamily: "'Ubuntu', sans-serif"}}>
                                            {`${post.title}, $${post.price} /day`}

                                        </Card.Header>
                                        <Card.Meta>
                                            {post.user !== null ? post.user.name.givenName : null}
                                        </Card.Meta>
                                        <Card.Description style = {{fontFamily: "'Ubuntu', sans-serif"}}>
                                            {(post.description.length > 75) ? post.description.slice(0, 75) + '...': post.description}
                                        </Card.Description>
                                        
                                    </Card.Content>
                                        {(this.props.user && this.props.user._id !== post.user._id) ? 
                                            <Card.Content extra>
                                                <ButtonModal post = {post}/>
                                            </Card.Content> : null}
                                    
                            </Card>

                        )})}
                    </Card.Group>
                }
                {data.length === 0 &&
                    <h3>No Results to Display</h3>
                }
            </div>
        </Container>
        )
    }
}

export default connect(mapStateToProps)(Mapping);