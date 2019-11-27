import React from 'react'

export default function LoginPage(props) {
  const { isShowLoginPage } = props
  return isShowLoginPage ? (
    <>
      <div>登录窗口</div>
    </>
  ) : null
}
