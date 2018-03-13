import React, { Component } from "react";

class SearchForm extends Component {
    

    render() {
        return (
            <div>
                <input 
                placeholder="Search"
                type="text"
                name="term"/>
            </div>
        )
    }
}

export default SearchForm;
