import React, { Component } from "react";
import geocoder from "geocoder";
// import Geocode from "react-geocode";
import { connect } from "react-redux";
import { Image, Container } from 'semantic-ui-react';
import * as dataActions from '../../actions/dataAction';
import loadingGif from '../../components/img/loading.gif';
// import { Link } from "react-router-dom";
// import API from "../../utils/API";

const mainDivStyle={
    marginTop:"90px",
}

let mapStateToProps = (store) => {
    return {
        geoInfo: store.data.geoInfo,
        isGeoStored: store.data.isGeoStored,
    }
}
class Dashboard extends Component{

    componentDidMount(){
        this._getLocation();
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
        if (!this.props.isGeoStored) {
            return (
                <Image src = {loadingGif}></Image>
            )
        }
        return(
            <Container style = {mainDivStyle}>
                <h1>Dashboard</h1>
            </Container>
        )
    }
}

export default connect(mapStateToProps, dataActions)(Dashboard);

// import React, { Component } from "react";
// import geocoder from "geocoder";
// import { connect } from "react-redux";
// import { Image, Container } from 'semantic-ui-react';
// import { storeLoc } from '../../actions/dataAction';
// import loadingGif from '../../components/img/loading.gif';
// // import { Link } from "react-router-dom";
// // import API from "../../utils/API";

// const mainDivStyle={
//     marginTop:"90px",
// }

// let mapStateToProps = (store) => {
//     return {
//         geoInfo: store.data.geoInfo,
//         user: store.user,
//         isGeoStored: store.data.isGeoStored,
//     }
// }
// class Dashboard extends Component{
//     componentDidMount(){
//         console.log('mounted');
//         this._getLocation();
//     }
//     _getLocation = () => {
//         console.log('trying to use navigator.geolocation');
//         const geolocation = navigator.geolocation;
//         const location = new Promise((resolve, reject) => {
//         //   if (!geolocation) {
//         //     reject(new Error('Not Supported'));
//         //   }

//           geolocation.getCurrentPosition((position) => {
//             resolve(position);
//           }, () => {
//             reject (new Error('Permission denied'));
//           });
//         });
        
//         location.then((locationResults) =>{
//             geocoder.reverseGeocode(locationResults.coords.latitude, locationResults.coords.longitude, (err, data) =>{
//                 console.log(data);
//                 let geoInfo = {
//                     coordinate:{
//                         longitude: locationResults.coords.longitude,
//                         latitude: locationResults.coords.latitude
//                     }
//                 }
//                 for (let i = 0; i<data.results[0].address_components.length; i++){
//                     let component = data.results[0].address_components[i];
    
//                     if(component.types.includes('sublocality') || component.types.includes('locality')) {
//                         geoInfo.city = component.long_name;
//                     }
//                     else if (component.types.includes('administrative_area_level_1')) {
//                         geoInfo.region = component.long_name;
//                     }
//                 }
//                 this.props.storeLoc(geoInfo);
//             })
//         })
//     }


//     render(){
//         if (!this.props.isGeoStored) {
//             return (
//                 <Image src = {loadingGif}></Image>
//             )
//         }
//         return(
//             <Container style = {mainDivStyle}>
//                 <h1>Dashboard</h1>
//             </Container>
//         )
//     }
// }

// export default connect(mapStateToProps, storeLoc)(Dashboard);
//AIzaSyCEN3E6DYSNWvPYnjAh3WyQZeJw3Y3lMVM