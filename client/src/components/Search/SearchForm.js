import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData, fetchAll } from "../../actions/dataAction"
import { Input } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";
import "./SearchForm.css"


let mapStateToProps = (store) => {
    return {
        data: store.data.data
    }
}

const searchStyle = {
    width: "300px"
}


class SearchForm extends Component {
    constructor() {
        super()
        this.state = {
            term: "",
            isButtonPressed: false
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            isButtonPressed: false
        });
    };
    fetchData() {
        this.props.dispatch(fetchData(this.state.term)
        )
    }
    fetchAll() {
        this.props.dispatch(fetchAll())
    }
    handleKeyPress(target) {
        if (target.charCode === 13) {
            this.conditionalFetch()
        }
    }
    conditionalFetch() {
        if (this.state.term === "") {
            this.fetchAll()
        }
        else {
            this.fetchData()
        }
        // this.setState({isButtonPressed:false});
        this.setState({
            isButtonPressed:true,
            term: ""
        });

    }
    render() {
        if (this.props.location === undefined){
            return (
                <div>
                    <Input
                        name="term"
                        onKeyPress={this.handleKeyPress.bind(this)}
                        onChange={this.handleInputChange}
                        value= {this.state.term}
                        icon='search'
                        placeholder='Search...'
                        style={searchStyle}
                    />

                    {this.state.isButtonPressed === true && <Redirect to='/findTool' />}
                    
                </div>
            )
        }
        else if (this.props.location.pathname === "/") {
            return (
                
                <div className="divStyle">                           
                    <Input
                        name="term"
                        onKeyPress={this.handleKeyPress.bind(this)}
                        onChange={this.handleInputChange}
                        icon='search'
                        placeholder='Search...'
                        className="inputStyle"
                    />
                    {this.state.isButtonPressed === true && <Redirect to='/findTool' />}
                </div>
                
            )
        }
    }
}

export default connect(mapStateToProps)(SearchForm);
