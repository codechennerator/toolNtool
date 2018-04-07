import React, { Component } from "react";
import { Button, Modal, Form, TextArea } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import API from "../../utils/API";

class ButtonModal extends Component{
  constructor() {
    super()
    this.state = {
      fireRedirect: false,
      content: "",
      cid: ""
    };
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.content !== ""){
      API.startConversation(this.props.post.user._id)
        .then(conversationModel =>{
          API.newMessage({
            conversation: conversationModel.data._id,
            content: this.state.content
          }).then(res => {
            this.setState({ cid: res.data._id , fireRedirect: true })
          }).catch(err => console.log(err));
        })
    }
  };

render(){
    return(  
        <div>
          <Modal trigger={<Button color='violet' content='Contact' />}>
              <Modal.Header>Contact the owner to find availability!</Modal.Header>
              <Modal.Content>
                <Form>
                  <Form.Field>
                    <label>Contact</label>
                    <TextArea
                      style={{ minHeight: 100 }}
                      value={this.state.content}
                      onChange={this.handleInputChange}
                      name="content"
                      placeholder="Introduce yourself and tell the owner what you're renting his tools for!"
                    />
                  </Form.Field>
                  </Form>
              </Modal.Content>
              <Modal.Actions>
                <Button color='violet' onClick={this.handleFormSubmit}>
                    Submit
                </Button>
              </Modal.Actions>
              {this.state.fireRedirect && (
                    <Redirect to={"/messages/" + this.state.cid}/>
              )}
          </Modal>
        </div>
    );
  };
}


export default ButtonModal