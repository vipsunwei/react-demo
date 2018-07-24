import React, { Component } from 'react'
import './Login.css'
// import LoginPage from './LoginPage.js'

class LoginControl extends Component {
  constructor() {
    super()
    this.state = {
      isShowLoginPage: false
    }
  }
  LoginHandler () {
    console.log(this)
    // isShowLoginPage = true
  }
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <a className="Login-btn" onClick={this.LoginHandler}>登录</a>|
          <a className="register-btn">注册</a>
        </header>
      </div>
    )
  }
}

export default LoginControl
