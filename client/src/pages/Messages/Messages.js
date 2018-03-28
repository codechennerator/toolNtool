import React, { Component } from "react";
import { fetchAll } from "../../actions/dataAction"
import { connect } from "react-redux";
import { Container } from 'semantic-ui-react';
import API from "../../utils/API";

const mainDivStyle={
    marginTop:"90px",
}



class Messages extends Component{
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
                <h1>Messages</h1>
                <h2>{JSON.stringify(this.state.conversations)}</h2>
            </Container>
        );
    }
}

export default Messages;