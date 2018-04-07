import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Segment, Image, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import emptyProfile from "../../components/img/archive/empty-profile.png"

const style = {
    mainDivStyle: {
        marginTop: "100px",
        marginBottom: "40px",
        height: "auto",
        paddingTop: "auto"
        
    },
    profileImg: {
        height: "50px", 
        width: "50px", 
        display: "block", 
        marginLeft: "auto", 
        marginRight: "auto"
    },
    profile: {
        display: "block", 
        marginLeft: "auto", 
        marginRight: "auto",
    },
    message: {
        paddingTop: 13
    }
}

class Inbox extends Component{
    constructor() {
        super()
        this.state = {
            conversations: [],
        };
    }
    componentDidMount(){
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
        if(this.state.conversations.length === 0){
            return(
                <Container style = {style.mainDivStyle}>
                    <h1>Inbox</h1>
                    <h2>You do not have any existing conversations</h2>
                </Container>
            )
        }
        return(
            <Container style={style.mainDivStyle}>
                <h1 style={{color: "#5c7aff", fontFamily: "'Ubuntu', sans-serif"}}>Inbox</h1>
                <Segment.Group>
                    <Grid celled="internally">
                        {this.state.conversations.map(conversation =>{
                            let userId = this.props.user._id;
                            let partnerInd = (conversation.users.findIndex(c=>c._id === userId))===1 ? 0 : 1 ;
                            return(
                                <Grid.Row key = {conversation._id}>
                                    <Grid.Column width = {2}>
                                        <Image src = {emptyProfile} style = {style.profileImg}/>
                                    </Grid.Column>
                                    <Grid.Column width = {3}>
                                        <h2 style={{textAlign: "center", fontFamily: "'Ubuntu', sans-serif", paddingTop: 10}}>{conversation.users[partnerInd].name.givenName} {conversation.users[partnerInd].name.familyName}</h2>
                                    </Grid.Column>
                                    <Grid.Column width = {11} as = {Link} to = {"/messages/" + conversation._id} style = {style.profile}>
                                        <div style = {style.message}>
                                            <h3 style={{fontFamily: "'Open Sans', sans-serif"}}>Last Message: {(conversation.messages[0]) ? conversation.messages[0].content:null}</h3>
                                        </div>
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