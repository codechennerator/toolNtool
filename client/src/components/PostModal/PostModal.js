import React, { Component } from 'react';
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import API from "../../utils/API";



class PostModal extends Component {

    handleFormSubmit = event => {
        event.preventDefault();
        if (
        this.props.info.title !=="" && 
        this.props.info.description !=="" &&
        this.props.info.image !=="" &&
        this.props.info.location !==""){
          API.savePost({
            title: this.props.info.title,
            description: this.props.info.description,
            user: this.props.user._id,
            img: this.props.info.image,
            location: this.props.info.location,
          })
            .then(res => {
              window.location.href = "/"
            })
            .catch(err => console.log(err));
        }
    };

    render(){
        console.log(this.props.info)

        return(  
            <div>
            <Modal trigger={<Button>Preview</Button>}>
                <Modal.Header>Post Preview</Modal.Header>
                <Modal.Content image scrolling>
                <Image wrapped size='medium' src={this.props.info.image} rounded />
                <Modal.Description>
                    <p>{this.props.info.location}</p>
                    <p>Title: {this.props.info.title}</p>
                    <p>Description: {this.props.info.description}</p>
                </Modal.Description>
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
};

export default PostModal
