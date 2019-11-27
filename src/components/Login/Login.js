import React, { Component } from 'react'
import './Login.css'
import LoginPage from './LoginPage'


class LoginControl extends Component {
  constructor() {
    super()
    this.state = {
      isShowLoginPage: false
    }
  }
  render() {
    const { isShowLoginPage } = this.state
    return (
      <div className="Login">
        <header className="Login-header">
          <button className="Login-btn" onClick={() => !isShowLoginPage && this.setState({ isShowLoginPage: true })}>登录</button>|
          <button className="register-btn">注册</button>
        </header>
        <LoginPage isShowLoginPage={isShowLoginPage} />
      </div>
    )
  }
}

export default LoginControl
