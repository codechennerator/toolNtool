import React, { Component } from 'react';
import ReactCalendar from 'react-calendar';
 
class Calendar extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    console.log(this.state);
    return (
      <div>
        <ReactCalendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}
export default Calendar;