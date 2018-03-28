import React, { Component } from "react";
import { fetchAll } from "../../actions/dataAction"
import { connect } from "react-redux";
import { Container } from 'semantic-ui-react'

const mainDivStyle={
    marginTop:"60px",
}


const mapStateToProps = ({user}) =>{
    return { user };
}

class Messages extends Component{
    render(){
        return(
            <Container style = {mainDivStyle}>
                <h1>Messages</h1>
            </Container>
        );
    }
}

export default connect(mapStateToProps)(Messages);