import React from "react";
import "./Footer.css";
import logo from "../assets/chillnfree.png";
import deli from "../assets/delivery.png";
import gift from "../assets/gift.png";
import phone from "../assets/phone.png";
import place from "../assets/place.png";
import facebook from "../assets/facebook.png";

const Footer: React.FC = () => {
  return (
    <div className="footer-big">
      <div className="footer-container ">
        <div className="footer-column">
          <div className="cot1">
            <img src={logo} className="logofooter"></img>
            <div className="deli">
              <img src={deli} className="delivery"></img>
              <h1 className="COD barlow3">Ship COD toàn quốc</h1>
            </div>
            <div className="deli2">
              <img src={gift} className="gift"></img>
              <h1 className="COD barlow3 ">
                Mua hàng để nhận những phần quà hấp dẫn!
              </h1>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="cot2">
            <h1 className="barlow2 name2">LIÊN HỆ</h1>
            <div className="deli2">
              <img src={phone} className="gift"></img>
              <h1 className="COD barlow3 ">032 666 1994</h1>
            </div>
            <div className="place-footer">
              <img src={place} className="placeicon-footer"></img>
              <h1 className="place-text barlow3 ">
                Số 25 ngõ 38 Yên Lãng, phường Láng Hạ, quận Đống Đa, thành phố
                Hà Nội
              </h1>
            </div>
            <div className="deli2">
              <img src={facebook} className="facebook"></img>
              <a
                className="COD barlow3 "
                href="https://www.facebook.com/chillnfreeshop"
              >
                https://www.facebook.com/chillnfreeshop
              </a>
            </div>
          </div>
        </div>
        <div className="footer-column ">
          <div className="cot3">
            <h1 className="barlow2 name2">CHÍNH SÁCH</h1>
            <div className="ml-1 ">
              <ul className="list-disc">
                <li className="barlow3 FAQ mt-2">Chính sách bảo mật</li>
                <li className="barlow3 FAQ mt-2 ">FAQ</li>
                <li className="barlow3 FAQ mt-2">
                  Chính sách bảo hành và đổi trả
                </li>
                <li className="barlow3 FAQ mt-2">
                  Chính sách giao hàng hoả tốc
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <div className="cot4">
            <h1 className="barlow2 name2">FANPAGE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
