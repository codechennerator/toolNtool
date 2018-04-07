import React, { Component } from "react";
import { Form, TextArea, Container, Input, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
import PostModal from "../../components/PostModal";
import Calendar from "../../components/Calendar";
import noImage from "../../components/img/noImage.png";

const mainDivStyle = {
  marginTop: "100px"
};

function mapStateToProps(store) {
  return {
    user: store.user,
    geoInfo: store.data.geoInfo,
    isGeoStored: store.data.isGeoStored,

  };
}
class postTool extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      location: "",
      file: "",
      imagePreviewUrl: "",
      coordinate: {},
      isFulfilled: false,
      price: "",
      isCalendarOn: false,
      availableDate: new Date()
    };
  }

  componentDidMount() {
    this.setState({
      location:
        this.props.geoInfo.city && this.props.geoInfo.region
          ? `${this.props.geoInfo.city}, ${this.props.geoInfo.region}`
          : "",
      coordinate: this.props.geoInfo.coordinate
    });
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  _handleImageChange(e) {
    e.preventDefault();


    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    if (this.props.user === false) {
      return (
        <div>
          <Container style={mainDivStyle}>
            <h1>Please sign in to continue</h1>
          </Container>
        </div>
      );
    }

    return (
      <div>
        <Container style={mainDivStyle}>
          <h1>Post your tools</h1>
          <label>All Fields are required</label>
          <Divider hidden />

          <Form>
            <img
              alt="img"
              src={imagePreviewUrl ? imagePreviewUrl : noImage}
              style={{ width: 300, height: 300, marginLeft: "auto", 
              marginRight: "auto" }}
            />

            <Form.Field>
              <label>Post Title</label>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
                size="big"
                maxLength = "20"
              />
            </Form.Field>

            <label>Image</label>
            <input
              className="fileInput"
              type="file"
              onChange={e => this._handleImageChange(e)}
            />

            <Form.Field>
              <label>Item Location</label>
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location: (Example: City, State)"
                size="big"
              />
            </Form.Field>
            <Form.Field>
              <label>Available Date</label>
              <Input
                name="availableDate"
                placeholder="MM/DD/YYYY"
                size="big"
                type="date"
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Renting Price (Per Day)</label>
              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="Price"
                size="big"
                type="number"
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <TextArea
                style={{ minHeight: 100 }}
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description"
              />
            </Form.Field>
            <PostModal info={this.state} user={this.props.user} />
          </Form>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps)(postTool);
