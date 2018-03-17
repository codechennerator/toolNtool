import React, {Component} from "react";
import SearchForm from "../Search"
import { Menu, Segment } from 'semantic-ui-react'
import "./NavCss.css"
import PropTypes from 'prop-types'

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black',
]


class Nav extends Component {

  static propTypes = {
    color: PropTypes.string,
  }

  render() {
    const { red } = this.props
    return(
      <div className="Navbar">
      <Menu pointing secondary color={red}>
      <a href="/"><Menu.Item name='Tool N Tool'  /></a>
      <a href="/findAll"><Menu.Item name='find All' /></a>
      <a href="/postTool"><Menu.Item name='post Tool' /></a>

      <SearchForm />
    </Menu>
    </div>
    
    );
  }
}

export default Nav;
