import { Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/chillnfree.png";
import left from "../assets/left.png";
import "./Login.css";

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
                <h1 className="login1 login-title text-main">Đăng Nhập</h1>
                <div className="inside">
                  <form className="login-form">
                    <div className="form-group">
                      <h1 className=" login1 ">Email</h1>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input"
                      />
                    </div>
                    <div className="form-group">
                      <h1 className="l login1 ">Mật khẩu</h1>
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
                      className="login-button-red login1 bg-main"
                    >
                      Đăng nhập
                    </button>
                  </form>
                </div>
              </div>
              <div className="signup-inlogin">
                <h1 className=" login1">
                  Bạn chưa có tài khoản?
                  <Link
                    to="/signup"
                    className="signup-link-red text-main login1 "
                  >
                    Đăng kí
                  </Link>
                </h1>
              </div>
              <div className="signup2">
                <h1 className=" login-help login1">Quên mật khẩu</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
