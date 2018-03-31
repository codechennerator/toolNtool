import React, { Component } from 'react';
// import { connect } from "react-redux";
import { Comment, Container, Form, Button } from 'semantic-ui-react';
import API from '../../utils/API';

class Messaging extends Component {
    constructor() {
        super()
        this.state = {
            messages: [],
            content: ""
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.loadMessages(),
          1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    loadMessages() {
        API.getMessages(this.props.cid)
        .then(res =>{
          this.setState({messages:res.data.messages})
        })
        .catch(err => console.log(err));
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }
    handleFormSubmit = (event)=>{
        event.preventDefault();
        if(this.state.content !== ""){
            API.newMessage({
                conversation: this.props.cid,
                content: this.state.content
            }).then(res => {
                this.loadMessages();
                this.setState({content: ""})
            }).catch(err => console.log(err));
        }
      }

    render(){
        return(
            <Container> 

                <Comment.Group>
                    <Form reply>
                        <Form.TextArea                       
                        style={{ minHeight: 100 }}
                        value={this.state.content}
                        onChange={this.handleInputChange}
                        name="content"
                        placeholder="Send"
                        />
                        <Button content='Send' labelPosition='right' icon='edit' primary onClick={this.handleFormSubmit}/>
                    </Form>
                {this.state.messages.map(message =>{
                    return(
                        <Comment key = {message._id}>
                            <Comment.Content>
                                <Comment.Author>{message.sender.name.givenName}
                                    <Comment.Metadata><div>{message.date}</div></Comment.Metadata>
                                </Comment.Author>
                                <Comment.Text>{message.content}</Comment.Text> 
                            </Comment.Content>
                        </Comment>
                    )
                })}
                </Comment.Group>
            </Container>
        )
    }
}

export default Messaging;