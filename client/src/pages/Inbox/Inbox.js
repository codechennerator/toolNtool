import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Segment, Image, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import emptyProfile from "../../components/img/empty-profile.png"

const mainDivStyle={
    marginTop:"90px",
}
const profileImgStyle={
    "height": "45px", 
    "width": "45px", 
    "display": "block", 
    "marginLeft": "auto", 
    "marginRight": "auto"
}

class Inbox extends Component{
    constructor() {
        super()
        this.state = {
            conversations: [],
        };
    }
    componentDidMount(){
        console.log('inbox');
        this.loadConversations();
    }

    loadConversations = () => {
        API.getConversations()
          .then(res =>{
            this.setState({conversations:res.data})
          })
          .catch(err => console.log(err));
      };

    render(){
        console.log(this.state);
        return(
            <Container style = {mainDivStyle}>
                <h1>Inbox</h1>
                <Segment.Group>
                    <Grid celled="internally">
                        
                        {this.state.conversations.map(conversation =>{
                            let userId = this.props.user._id;
                            let partnerInd = (conversation.users.findIndex(c=>c._id === userId))===1 ? 0 : 1 ;
                            return(
                                <Grid.Row key = {conversation._id}>
                                        <Grid.Column width = {2}>
                                            <Image src = {emptyProfile} style = {profileImgStyle}/>
                                        </Grid.Column>
                                        <Grid.Column width = {3} style = {{"textAlign": "center", }}>
                                            
                                            <h1>{conversation.users[partnerInd].name.givenName} {conversation.users[partnerInd].name.familyName}</h1>
                                            
                                        </Grid.Column>
                                        
                                        <Grid.Column width = {10} >
                                            <Link to = {"/messages/" + conversation._id} style = {{"verticalAlign": "middle"}}>
                                            <div >
                                                <h3>Last Message: {(conversation.messages[0]) ? conversation.messages[0].content:null}</h3>
                                            </div>
                                            </Link>
                                        </Grid.Column>
                                        
                                </Grid.Row>
                               
                            ) 
                        })
                        }
                        
                    </Grid>
                </Segment.Group>
            </Container>
        );
    }
}

function mapStateToProps({user}){
    return { user };
}


export default connect(mapStateToProps)(Inbox);