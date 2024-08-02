// src/components/TopNav.tsx
import React from "react";
import "./Navigation.css";
import logo from "../assets/chillnfree.png";
import place from "../assets/place.png";
import phone from "../assets/phone.png";
import user from "../assets/user.png";
import bag from "../assets/bag.png";

import { Link, useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  return (
    <div>
      <div className="nav-container ">
        <div className="tabs-container barlow1 ">
          <Link to="/home" className="tab">
            TRANG CHỦ
          </Link>
          <Link to="/arrival" className="tab">
            NEW ARRIVAL
          </Link>
        </div>
        <div className="logo">
          <img src={logo} style={{ height: "80px", width: "229" }} />
        </div>
        <div className="tabs-container barlow1">
          <Link to="/product" className="tab">
            SẢN PHẨM
          </Link>
          <Link to="/contact" className="tab">
            LIÊN HỆ
          </Link>
        </div>
        <div className="leftside ">
          <img src={place} className="place"></img>
          <h1 className="barlow1 vietnam">VIETNAM</h1>
          <img src={phone} className="phone"></img>
          <h1 className="barlow1 number">032 666 1994</h1>
        </div>
        <div className="rightside ">
          <img src={user} className="user"></img>
          <button className="barlow1 taikhoan" onClick={handleLogin}>
            TÀI KHOẢN
          </button>
          <img src={bag} className="cart"></img>
          <button className="barlow1 giohang" onClick={handleCart}>
            GIỎ HÀNG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
