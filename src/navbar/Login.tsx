import React from "react";
import "./Login.css";
import logo from "../assets/chillnfree.png";
import { Input } from "antd";
import left from "../assets/left.png";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/home");
  };
  return (
    <div className="login-container ">
      <div className="login-left ">
        <button className="login-back" onClick={goBack}>
          <img className="login-left-icon" src={left}></img>{" "}
        </button>
      </div>
      <div className="login-right  ">
        <div className="login-logo ">
          <img src={logo}></img>
        </div>
        <div className="login-main">
          <div className="blur1 ">
            <div className="login ">
              <div className="">
                <h2 className="login-title login1 text-main ">ĐĂNG NHẬP</h2>
                <div className="inside">
                  <form className="login-form">
                    <div className="form-group">
                      <h1 className="logintext login1 ">Email</h1>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input"
                      />
                    </div>
                    <div className="form-group">
                      <h1 className="logintext login1 ">Mật khẩu</h1>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="input"
                      />
                    </div>

                    <button
                      type="submit"
                      className="login-button login1 bg-main"
                    >
                      Đăng nhập
                    </button>
                  </form>
                </div>
              </div>
              <div className="signup-inlogin">
                <h1 className="acc login1">
                  Bạn chưa có tài khoản?
                  <Link to="/signup" className="signup-link text-main login1 ">
                    Đăng kí
                  </Link>
                </h1>
              </div>
              <div className="signup2">
                <h1 className="  captcha login1">Quên mật khẩu</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
