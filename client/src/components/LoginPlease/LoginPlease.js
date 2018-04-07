import React, { Component } from 'react'
import { Message } from 'semantic-ui-react'

class LoginPlease extends Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })
  }

  render() {
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          header="You're not signed in!"
          content={this.props.content}
        />
      )
    }

    return (
      <p>
      </p>
    )
  }
}

export default LoginPlease