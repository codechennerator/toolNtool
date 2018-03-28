import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from 'lodash'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import Detail from '../../pages/Detail/Detail';
import API from "../../utils/API";



class PostModal extends Component {

    constructor(props) {
        super(props)
    };

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
                    <p>User: {this.props.info.user}</p>
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
