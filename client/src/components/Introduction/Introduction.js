import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import Ionicon from 'react-ionicons';

const style={
    column: {
        paddingBottom: "2%"
    },
    iconImg: {
        maxWidth: "50%",
        maxHeight: "50%",
    },
}

class Introduction extends Component {
    render(){
        return(
            <div className="introContatiner">
            <Container>
                <Grid style={{paddingTop: "20vh", paddingBottom: "20vh"}}>
                    <div class="ui stackable four grid">
                        <div className="ui center aligned four wide column" style={style.column}>
                            <Ionicon icon="ios-map" fontSize="60px" />
                            <h3 style={{fontFamily: "'Open Sans', sans-serif", color: "black"}}>Automatic Locator</h3>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <Ionicon icon="ios-lock-outline" fontSize="60px" />
                            <h3 style={{fontFamily: "'Open Sans', sans-serif", color: "black"}}>User Authentication</h3>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <Ionicon icon="ios-search" fontSize="60px" />
                            <h3 style={{fontFamily: "'Open Sans', sans-serif", color: "black"}}>Search</h3>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <Ionicon icon="md-text" fontSize="60px" />
                            <h3 style={{fontFamily: "'Open Sans', sans-serif", color: "black"}}>Message</h3>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <Ionicon icon="ios-construct-outline" fontSize="60px" />
                            <h3 style={{fontFamily: "'Open Sans', sans-serif", color: "black"}}>Post & Delete</h3>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <Ionicon icon="ios-images" fontSize="60px" />
                            <h3 style={{fontFamily: "'Open Sans', sans-serif", color: "black"}}>Cloudinary</h3>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <Ionicon icon="ios-calendar-outline" fontSize="60px" />
                            <h3 style={{fontFamily: "'Open Sans', sans-serif", color: "black"}}>Calendar</h3>
                        </div>
                        <div className="ui center aligned four wide column" style={style.column}>
                            <Ionicon icon="ios-ice-cream-outline" fontSize="60px" />
                            <h3 style={{fontFamily: "'Open Sans', sans-serif", color: "black"}}>React Native</h3>
                        </div>
                    </div>
                </Grid>
            </Container>
            </div>
        )
    }

}


export default Introduction;