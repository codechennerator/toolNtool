import React, { Component } from 'react';
import SearchForm from "../../components/Search";
import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataAction';
import Introduction from "../../components/Introduction";
import './startPage.css';


class startPage extends Component{
  componentDidMount(){
    this.props.isHome();
  }
  componentWillUnmount(){
    this.props.leftHome();
  }
  render(){
    return (
      <div className="startPage">
        <SearchForm location = {this.props.location}/>
        <Introduction />
      </div>
    );
  }
}

export default connect(null, dataActions)(startPage);
