import React from "react";
import logo from "../assets/chillnfree.png";
import deli from "../assets/delivery.png";
import facebook from "../assets/facebook.png";
import gift from "../assets/gift.png";
import phone from "../assets/phone.png";
import place from "../assets/place.png";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-big">
      <div className="footer-container flex-col md:flex-row md:ml-10  ">
        <div className="footer-column ">
          <div className="cot1">
            <img
              src={logo}
              className="logofooter h-14 w-28 md:h-25 md:w-50"
            ></img>
            <div className="deli ">
              <img src={deli} className="delivery md:w-5.5 h-5"></img>
              <h1 className="COD md:text-lg barlow3">Ship COD toàn quốc</h1>
            </div>
            <div className="deli2">
              <img src={gift} className="gift md:w-4 md:h-5"></img>
              <h1 className="COD barlow3 md:text-lg ">
                Mua hàng để nhận những phần quà hấp dẫn!
              </h1>
            </div>
          </div>
        </div>
        <div className="footer-column border-t border-solid border-border md:border-hidden ">
          <div className="cot2">
            <h1 className="barlow2 name2 md:text-2xl">LIÊN HỆ</h1>
            <div className="deli2 mt-4 md:mt-6">
              <img src={phone} className="gift"></img>
              <h1 className="COD barlow3 md:text-lg ">032 666 1994</h1>
            </div>
            <div className="place-footer">
              <img src={place} className="placeicon-footer"></img>
              <h1 className="place-text md:text-lg barlow3 ">
                Số 25 ngõ 38 Yên Lãng, phường Láng Hạ, quận Đống Đa, thành phố
                Hà Nội
              </h1>
            </div>
            <div className="deli2">
              <img src={facebook} className="facebook"></img>
              <a
                className="COD barlow3 md:text-lg "
                href="https://www.facebook.com/chillnfreeshop"
              >
                https://www.facebook.com/chillnfreeshop
              </a>
            </div>
          </div>
        </div>
        <div className="footer-column hidden lg:block ">
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
        <div className="footer-column hidden lg:block">
          <div className="cot4">
            <h1 className="barlow2 name2">FANPAGE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
