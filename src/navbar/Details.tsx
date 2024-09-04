// src/pages/Details.tsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import boongminz1 from "../assets/boongminz1.jpeg";
import boongminz2 from "../assets/boongminz2.jpeg";
import "./Details.css";
import Item from "./Item";
import { items } from "./items";
import SizeButton from "./SizeButton";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }
  const displayedItems = items.slice(10, 14);
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate("/cart");
  };

  return (
    <div>
      <div className="details-container  ">
        <div className="column1  hidden lg:block ">
          <div className="details-left  ">
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
          <div className="details-items-text  ">
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
        <div className="column2  lg:w-full lg:h-full  ">
          <div className="details-info  lg:ml-22 lg:mt-5">
            <h2 className="details-name lg:w-400 md:w-700 lg:text-40 barlow5 text-main ">
              {item.name}
            </h2>
            <p className="details-price lg:text-2xl barlow3 ">{item.price}</p>

            <div className=" items-center justify-center flex   lg:hidden ">
              <img
                src={item.image}
                alt={item.name}
                className="details-image1 md:w-500 md:h-500  lg:hidden "
              />
            </div>

            <div className="details-size-text-guide-mobile  lg:mt-9 lg:hidden justify-center items-center">
              <img
                src={boongminz1}
                className="details-boongminz2 md:h-36 md:w-36 "
              />
              <img
                src={boongminz2}
                className="details-boongminz1-edit-mobile md:h-36 md:w-36"
              />
              <img
                src={boongminz1}
                className="details-boongminz1-edit-mobile md:h-36 md:w-36"
              />
              <img
                src={boongminz2}
                className="details-boongminz1-edit-mobile md:h-36 md:w-36"
              />
            </div>

            <div className="details-size-text-guide lg:w-400 lg:mt-9 ">
              <p className="details-size-text md:text-2xl lg:text-xl barlow4">
                {" "}
                Chọn size
              </p>
              <p className="details-size-guide barlow4 md:text-2xl lg:text-xl ">
                {" "}
                Hướng dẫn chọn size
              </p>
            </div>
            <div className="details-button md:flex lg:block justify-center items-center">
              <SizeButton></SizeButton>
            </div>
            <div>
              <button className="details-cart-button lg:w-400 lg:h-16 barlow4">
                THÊM VÀO GIỎ HÀNG
              </button>
            </div>
            <div>
              <button
                className="details-buy-button lg:w-400 lg:h-16 barlow4 bg-main text-white"
                onClick={handleBuyNow}
              >
                MUA NGAY
              </button>
            </div>
            <div className="details-items-text-mobile lg:hidden md:ml-10  ">
              <h1 className="details-topic-mobile text-main barlow3">
                CHI TIẾT SẢN PHẨM
              </h1>
              <h1 className="barlow3 VCS-mobile">
                Thiết kế dành riêng cho đội tuyển GAM eSports tại giải đấu MSI
                2024 và VCS mùa hè 2024
              </h1>
              <ul className="list-disc details-shirt-details-text-mobile  ">
                <li className=" details-shirt-details-mobile barlow3 mt-2 ">
                  Chất liệu: Polyester
                </li>
                <li className="barlow3 details-shirt-details-mobile mt-2 ">
                  Relaxed Fit
                </li>
                <li className="barlow3 details-shirt-details-mobile mt-2">
                  Các logo nhà tài trợ có hiệu ứng được sử dụng kĩ thuật in
                  decal
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
        </div>
      </div>
      <div className="details-other-item">
        <h1 className="barlow3 details-other-item-heading lg:text-40">
          CÁC SẢN PHẨM KHÁC
        </h1>
        <div className="productline lg:mt-10 md:mt-12 ipad-pro:mt-5  ">
          <div className="grid grid-cols-2 justify-center gap-5 lg:gap-20    items-center md:grid-cols-4 product">
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
