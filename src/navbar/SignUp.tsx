import React from "react";
import "./SignUp.css";
import logo from "../assets/chillnfree.png";
import { Input } from "antd";
import left from "../assets/left.png";
import { Link, useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/login");
  };
  return (
    <div className="login-container ">
      <div className="signup-left ">
        <button className="login-back" onClick={goBack}>
          <img className="login-left-icon" src={left}></img>{" "}
        </button>
      </div>
      <div className="login-right  ">
        <div className="login-logo ">
          <img src={logo}></img>
        </div>
        <div className="signup-main">
          <div className="blur1 ">
            <div className="login ">
              <div className="">
                <h2 className="login-title login1 text-main ">ĐĂNG KÍ</h2>
                <div className="inside">
                  <form className="login-form">
                    <div className="form-group">
                      <h1 className="logintext login1 ">Họ và tên</h1>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input"
                      />
                    </div>
                    <div className="form-group">
                      <h1 className="logintext login1 ">Email</h1>
                      <Input
                        type="password"
                        id="password"
                        name="password"
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
                      <h1 className="login1 login-guide">
                        Sử dụng ít nhất 8 ký tự với các chữ cái và số
                      </h1>
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
                  Bạn đã có tài khoản?
                  <Link to="/login" className="signup-link text-main login1 ">
                    Đăng nhập
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
