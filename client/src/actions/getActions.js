import geocoder from "geocoder";
// import * as dataActions from './dataAction';
import store from '../store'


export const  _getLocation = () => {
        console.log("storing geo data...")
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
                // this.props.storeLoc(geoInfo);
                store.dispatch({
                    type: "STORE_LOC",
                    payload: geoInfo
                })

            }, {key: "AIzaSyCEN3E6DYSNWvPYnjAh3WyQZeJw3Y3lMVM"})
        })
    }