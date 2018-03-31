import React, { Component } from "react";
import { Button, Modal, Icon, Form, TextArea } from 'semantic-ui-react'
import API from "../../utils/API";

class ButtonModal extends Component{
  constructor() {
    super()
    this.state = {
      content: "",
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
            window.location.href = "/messages/" + res.data._id
          }).catch(err => console.log(err));
        })
    }
  };

render(){
  console.log(this.props);
    return(  
        <div>
          <Modal trigger={<Button content='Rent!' primary />}>
              <Modal.Header>Contact the owner to find availability!</Modal.Header>
              <Modal.Content>
                <Form>
                  <Form.Field>
                    <label>Content</label>
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
                <Button primary onClick={this.handleFormSubmit}>
                    Submit <Icon name='right chevron' />
                </Button>
              </Modal.Actions>
          </Modal>
        </div>
    );
  };
}


export default ButtonModal