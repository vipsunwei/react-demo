import React, { Component } from 'react'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowLoginPage: this.props.isShowLoginPage
    }
  }

  render() {
    if (this.state.isShowLoginPage) {
      return (
        <div>登录窗口</div>
      )
    }
  }
}

export default LoginPage