import React, { Component } from 'react';
// import { connect } from "react-redux";
import API from '../../utils/API';

class MessageWell extends Component {
    constructor() {
        super()
        this.state = {
            messages: [],
        };
    }
    componentWillMount(){
        console.log(this.props);
        this.loadMessages();
    }
    loadMessages(){
        API.getMessages(this.props.cid)
        .then(res =>{
          console.log(res);
          this.setState({messages:res.data.messages})
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div> 
                <h1> Messages </h1>
                {this.state.messages.map(message =>{
                    return(
                        <div key = {message._id}>
                            <p>{message.sender.name.givenName} says: {message.content}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageWell;