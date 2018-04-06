import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ButtonModal from "../ButtonModal"
import { Image, Container, Card, } from 'semantic-ui-react';


const style = {
    container: {
      marginTop: '8em',
      marginBottom: '10em'
    },
    image: {
      marginBottom: '3em'
    },
  };



let mapStateToProps = (store) => {
    return {
        data: store.data.data,
        user: store.user
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
        console.log(data)
        return (
            <Container style = {style.container}>
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
                        {data.data.slice(0, this.state.count).map(post => {
                            return(
                            <Card key={post._id}>
                            <Link to={"/findTool/"+post._id}>
                                <Image floated='right' size='medium' src={post.img} />
                                </Link>
                                    <Card.Content>
                                        <Card.Header>
                                            {post.title}
                                        </Card.Header>
                                        <Card.Meta>
                                            {post.user !== null ? post.user.name.givenName : null}
                                        </Card.Meta>
                                        <Card.Description>
                                            {post.description}
                                            <strong>${post.price}</strong>
                                        </Card.Description>
                                        {(this.props.user) ? <ButtonModal post = {post}/> : null}
                                    </Card.Content>
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


// import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { Button, Header, Icon, Image, Divider, Container, Card, } from 'semantic-ui-react';


// const style = {
//     container: {
//       marginTop: '8em',
//       marginBottom: '10em'
//     },
//     image: {
//       marginBottom: '3em'
//     },
//   };

// let mapStateToProps = (store) => {
//     return {
//         data: store.data.data
//     }
// }

// class Mapping extends Component {

//     constructor() {
//         super()
//         this.state = {
//             count: 10
//         };
//     }

//     handleInputChange = event => {
//         const { name, value } = event.target;
//         console.log(name, value)
//         this.setState({
//             [name]: Number(value)
//         });
//     };


//     render() {
//         const { data } = this.props;
//         return (
//             <Container style = {style.container}>
//             <div>
//                 <select name="count" onChange={this.handleInputChange}>
//                     <option value="1">1</option>
//                     <option selected="selected" value="10">10</option>
//                     <option value="20">20</option>
//                     <option value="50">50</option>
//                     <option value="999">All</option>
//                 </select>
//                 <p/>
//                 {data.length !== 0 &&
//                     <Card.Group>
//                         {data.data.slice(0, this.state.count).map(post => (
//                             <Card key={post._id}>
//                             <Link to={"/findTool/"+post._id}>
//                                 <Image floated='right' size='medium' src={post.img} />
//                                 </Link>
//                                     <Card.Content>
//                                         <Card.Header>
//                                             {post.title}
//                                         </Card.Header>
//                                         <Card.Meta>
//                                             {post.user != null ? post.user.name.givenName : null}
//                                         </Card.Meta>
//                                         <Card.Description>
//                                             {post.description}
//                                             <strong>${post.price}</strong>
//                                         </Card.Description>
//                                     </Card.Content>
//                             </Card>

//                             ))}
//                         </Card.Group>
//                     }
//                     {data.length === 0 &&
//                         <h3>No Results to Display</h3>
//                     }
//                 </div>
//             </Container>
//         )
//     }
// }

// export default connect(mapStateToProps)(Mapping);
