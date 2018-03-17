import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData, fetchAll } from "../../actions/dataAction"
import { Input } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";



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
        };
    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
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
    }



    render() {
        const { data } = this.props;
        if (window.location.href.slice(-1) === "/") {
            return (
                <div>
                    <Input
                        name="term"
                        onKeyPress={this.handleKeyPress.bind(this)}
                        onChange={this.handleInputChange}
                        icon='search'
                        placeholder='Search...'
                        style={{ width: "500px", fontSize: "20px" }}
                    />

                    {data.length !== 0 && data.data.length !== 0 &&
                        <Redirect to='/findTool' />
                    }
                </div>
            )
        }
        return (
            <div>
                <Input
                    name="term"
                    onKeyPress={this.handleKeyPress.bind(this)}
                    onChange={this.handleInputChange}
                    icon='search'
                    placeholder='Search...'
                    style={searchStyle}
                />

                {data.length !== 0 && data.data.length !== 0 &&
                    <Redirect to='/findTool' />
                }


            </div>
        )
    }
}

export default connect(mapStateToProps)(SearchForm);
