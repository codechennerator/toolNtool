import React, { Component } from "react";
import geocoder from "geocoder";
import { connect } from "react-redux";
import { Image, Container, Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as dataActions from '../../actions/dataAction';
import loadingGif from '../../components/img/loading.gif';
import API from "../../utils/API";

const mainDivStyle={
    marginTop: "100px",
    marginBottom: "40px"
}

const style = {
    cardContainer: {
        marginTop: '10px'
    }
  };

let mapStateToProps = (store) => {
    return {
        geoInfo: store.data.geoInfo,
        isGeoStored: store.data.isGeoStored,
    }
}
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this._getLocation();
        this.getPosts();
    }

    handleDelete = async (id, e) =>{
        await API.deletePost(id);
        this.getPosts();
        
    }
    getPosts = () =>{
        API.getUserPosts()
        .then(res =>{
            this.setState({data: res.data})
        })
    }
    _getLocation = () => {
        
        const geolocation = navigator.geolocation;
        const location = new Promise((resolve, reject) => {
          if (!geolocation) {
            reject(new Error('Not Supported'));
          }

          geolocation.getCurrentPosition((position) => {
            resolve(position);
          }, () => {
            reject (new Error('Permission denied'));
          });
        });
        
            location.then((locationResults) =>{
            geocoder.reverseGeocode(locationResults.coords.latitude, locationResults.coords.longitude, (err, data) =>{
                
                let geoInfo = {
                    coordinate:{
                        longitude: locationResults.coords.longitude,
                        latitude: locationResults.coords.latitude
                    }
                }
                for (let i = 0; i<data.results[0].address_components.length; i++){
                    let component = data.results[0].address_components[i];
    
                    if(component.types.includes('sublocality') || component.types.includes('locality')) {
                        geoInfo.city = component.long_name;
                    }
                    else if (component.types.includes('administrative_area_level_1')) {
                        geoInfo.region = component.long_name;
                    }
                }
                this.props.storeLoc(geoInfo);
            }, {key: "AIzaSyCEN3E6DYSNWvPYnjAh3WyQZeJw3Y3lMVM"})
        })
    }


    render(){
        const { data } = this.state;
        if (!this.props.isGeoStored) {
            return (
                <Image src = {loadingGif}></Image>
            )
        }
        return(
            <Container style = {mainDivStyle}>
                <h1>Your Posts</h1>
                    <div>
                        <div>
                        <select name="count" onChange={this.handleInputChange}>
                            <option value="1">1</option>
                            <option selected="selected" value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="999">All</option>
                        </select>
                        </div>
                        <div style={style.cardContainer}>
                        {data.length !== 0 &&
                            <Card.Group>
                                {data.slice(0, this.state.count).map(post => {
                                    return(
                                    <Card key={post._id}>
                                    <Link to={"/findTool/"+post._id}>
                                        <Image floated='right' size='medium' src={post.img} style={{height: "200px"}}/>
                                        </Link>
                                            <Card.Content>
                                                <Card.Header>
                                                    {post.title}  ${post.price}
                                                </Card.Header>
                                                <Card.Meta>
                                                    {post.user !== null ? post.user.name.givenName : null}
                                                </Card.Meta>
                                                <Card.Description>
                                                    {(post.description.length > 75) ? post.description.slice(0, 75) + '...': post.description}
                                                </Card.Description>
                                                {/* {(this.props.user && this.props.user._id !== post.user._id) ? <ButtonModal post = {post}/> : null} */}
                                            </Card.Content>
                                            <Card.Content extra>
                                                <Button color='grey' onClick={this.handleDelete.bind(this, post._id)}>Delete</Button>
                                            </Card.Content>
                                    </Card>

                                )})}
                            </Card.Group>
                        }
                        {data.length === 0 &&
                            <h3>No Results to Display</h3>
                        }
                        </div>
            </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, dataActions)(Dashboard);