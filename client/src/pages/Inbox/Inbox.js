import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import API from "../../utils/API";

const mainDivStyle={
    marginTop:"90px",
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
        return(
            <Container style = {mainDivStyle}>
                <h1>Inbox</h1>

                {this.state.conversations.map(conversation =>{
                    let userId = this.props.user._id;
                
                    let partnerInd = (conversation.users.findIndex(c=>c._id === userId))===1 ? 0 : 1 ;
                    
                    return(
                        <div key = {conversation._id}>
                        <Link to = {"/messages/" + conversation._id}>
                            <h1>{conversation.users[partnerInd].email}</h1>
                        </Link>
                        </div>
                    )
                })
                
                }
            </Container>
        );
    }
}

function mapStateToProps({user}){
    return { user };
}


export default connect(mapStateToProps)(Inbox);