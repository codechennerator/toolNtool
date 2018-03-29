const geocoder = require('geocoder');

module.export = {
    getCoord: (location)=>{
        geocoder.geocode(location, function (err, data) {
            console.log(data.results[0].geometry)
            return data.results[0].geometry
        });
    }
}

