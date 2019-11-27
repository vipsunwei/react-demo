import "./Login.css";
import LoginPage from "./LoginPage";
import React, { useState } from "react";

export default function LoginControl() {
  const [isShowLoginPage, setIsShowLoginPage] = useState(false);
  return (
    <>
      <header className="Login-header">
        <button
          className="Login-btn"
          onClick={() => !isShowLoginPage && setIsShowLoginPage(true)}
        >
          登录
        </button>
        |<button className="register-btn">注册</button>
      </header>
      <LoginPage isShowLoginPage={isShowLoginPage} />
    </>
  );
}
