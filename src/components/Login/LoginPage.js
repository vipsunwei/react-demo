import React, { Component } from 'react'

class LoginPage extends Component {

  render() {
    const { isShowLoginPage } = this.props
    if (isShowLoginPage) {
      return (
        <div>登录窗口</div>
      )
    } else {
      return null
    }
  }
}

export default LoginPage