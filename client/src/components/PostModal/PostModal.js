import React, { Component } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import API from "../../utils/API";
import axios from 'axios'


class PostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fireRedirect: false,
            image: null,
            isFulfilled: false
        }
    }

    handleFormSubmit() {
        API.savePost({
            title: this.props.info.title,
            description: this.props.info.description,
            user: this.props.user._id,
            img: this.state.image,
            location: this.props.info.location,
            coordinate: this.props.info.coordinate,
            price: this.props.info.price
        })
            .then(res => {
                this.setState({ fireRedirect: true })
            })
            .catch(err => console.log(err))

    };

    componentDidMount() {
        if (
            this.props.info.title !== "" &&
            this.props.info.description !== "" &&
            this.props.info.imageUrl !== null &&
            this.props.info.price !== null &&
            this.props.info.location !== "") {
            this.setState({ isFulfilled: true })
        }
    }

    submitImage() {
        if (this.state.isFulfilled) {
            axios.post('https://api.cloudinary.com/v1_1/daretodate/image/upload', {
                "file": this.props.info.imagePreviewUrl,
                "upload_preset": "v4gae7vn",
            },
                { "X-Requested-With": "XMLHttpRequest" })
                .then(response => {
                    this.setState({ image: response.data.secure_url })
                    console.log(this.state.image)

                    this.handleFormSubmit()
                })
        }
        else {
            alert("please fill all required fields.")
        }
    }


    componentWillUnmount() {
        this.setState({ isFulfilled: false });
    }
    render() {

        const { fireRedirect } = this.state
        return (
            <div>
                <Modal trigger={<Button disabled={false} style={{ fontFamily: "'Open Sans', sans-serif" }}>Preview</Button>}>
                    <Modal.Header style={{ color: "#5c7aff", fontFamily: "'Ubuntu', sans-serif" }}>Post Preview</Modal.Header>
                    <Modal.Content image scrolling>
                        <Image wrapped size='medium' src={this.props.info.imagePreviewUrl} rounded />
                        <Modal.Description>
                            <p style={{ fontFamily: "'Open Sans', sans-serif" }}>{this.props.info.location}</p>
                            <p style={{ fontFamily: "'Open Sans', sans-serif" }}>Title: {this.props.info.title}</p>
                            <p style={{ fontFamily: "'Open Sans', sans-serif" }}>Description: {this.props.info.description}</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color="black" style={
                            this.state.isFulfilled ?
                                { fontFamily: "'Open Sans', sans-serif" } :
                                {
                                    fontFamily: "'Open Sans', sans-serif",
                                    cursor: "not-allowed"
                                }
                        }
                            onClick={this.submitImage.bind(this)}>
                            Submit
                </Button>
                    </Modal.Actions>
                    {fireRedirect && (
                        <Redirect to={'/'} />
                    )}
                </Modal>

            </div>
        );
    };
};

export default PostModal