import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchData, fetchAll } from "../../actions/dataAction"
import { Input } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";
import { Container, Grid } from 'semantic-ui-react'
import power from "../../components/img/power.jpg"
import "./SearchForm.css"


let mapStateToProps = (store) => {
    return {
        data: store.data.data
    }
}

const searchStyle = {
    width: "300px"
}

const gridStyle = {
    backgroundImage: `url(${power})`,
   height:"600px", 
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
                <container>
                 <Grid>
                     <Grid.Row centered  style={gridStyle}>
                       
                       <Container text >
                        <Grid.Row className="textStyle1">
                            <p>Find the tools you want and</p>
                        </Grid.Row>
                        <Grid.Row className="textStyle2">
                            <p>Share the tools you have</p>
                         </Grid.Row>
                        </Container>
                        <Input
                            name="term"
                            onKeyPress={this.handleKeyPress.bind(this)}
                            onChange={this.handleInputChange}
                            icon='search'
                            placeholder='Search...'
                            style={{ width: "1000px", fontSize: "20px",height:"60px" }}
                           
                        />
                        {data.length !== 0 && data.data.length !== 0 &&
                            <Redirect to='/findTool' />
                        }
    
                    </Grid.Row>

                     </Grid>
                </container>
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