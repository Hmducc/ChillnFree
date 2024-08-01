// src/pages/Details.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { items } from "./items";
import "./Details.css";
import boongminz1 from "../assets/boongminz1.jpeg";
import boongminz2 from "../assets/boongminz2.jpeg";
import SizeButton from "./SizeButton";
import Item from "./Item";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }
  const displayedItems = items.slice(10, 14);
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate("/cart"); // Navigate to the cart screen
  };

  return (
    <div>
      <div className="details-container ">
        <div className="column1">
          <div className="details-left ">
            <div className="details-small-image ">
              <div className="details-boongminz">
                <img src={boongminz1} className="details-boongminz1" />
                <img src={boongminz2} className="details-boongminz1-edit" />
                <img src={boongminz1} className="details-boongminz1-edit" />
                <img src={boongminz2} className="details-boongminz1-edit" />
                <img src={boongminz1} className="details-boongminz1-edit" />
              </div>
            </div>
            <div className="  details-big-image ">
              <img
                src={item.image}
                alt={item.name}
                className="details-image 0"
              />
            </div>
          </div>
          <div className="details-items-text ">
            <h1 className="details-topic text-main barlow3">
              CHI TIẾT SẢN PHẨM
            </h1>
            <h1 className="barlow3 VCS">
              Thiết kế dành riêng cho đội tuyển GAM eSports tại giải đấu MSI
              2024 và VCS mùa hè 2024
            </h1>
            <ul className="list-disc details-shirt-details-text  ">
              <li className=" details-shirt-details barlow3 mt-2 ">
                Chất liệu: Polyester
              </li>
              <li className="barlow3 details-shirt-details mt-2 ">
                Relaxed Fit
              </li>
              <li className="barlow3 details-shirt-details mt-2">
                Các logo nhà tài trợ có hiệu ứng được sử dụng kĩ thuật in decal
              </li>
              <li className="barlow3 details-shirt-details mt-2">
                Toàn bộ các artwork còn lại được sử dụng kĩ thuật in lụa
              </li>
              <li className="barlow3 details-shirt-details mt-2">
                Nhãn Jersey trang trí được may ở góc dưới thân trước
              </li>
            </ul>
          </div>
        </div>
        <div className="column2">
          <div className="details-info">
            <h2 className="details-name barlow5 text-main ">{item.name}</h2>
            <p className="details-price barlow3">{item.price}</p>
            <div className="details-size-text-guide">
              <p className="details-size-text barlow4"> Chọn size</p>
              <p className="details-size-guide barlow4"> Hướng dẫn chọn size</p>
            </div>
            <div className="details-button">
              <SizeButton></SizeButton>
            </div>
            <div>
              <button className="details-cart-button barlow4">
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
            <div>
              <button
                className="details-buy-button barlow4 bg-main text-white"
                onClick={handleBuyNow}
              >
                MUA NGAY
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="details-other-item">
        <h1 className="barlow3 details-other-item-heading">
          CÁC SẢN PHẨM KHÁC
        </h1>
        <div className="details-productline">
          <div className="details-product">
            {displayedItems.map((item) => (
              <Item
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
