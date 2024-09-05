// src/pages/Cart.tsx
import React from "react";
import bin from "../assets/bin.png";
import gam from "../assets/gam.png";
import Button from "./Button";
import "./Cart.css";
import CartItem from "./CartItem";
import Item from "./Item";
import { items } from "./items";

const Cart: React.FC = () => {
  const cartItems = [
    {
      image: gam,
      name: "Football Jersey Mixer x GAM Esports",
      size: "XL",
      amount: "1",
    },
  ];

  const displayedItems = items.slice(10, 14);
  return (
    <div>
      <div className="cart-heading lg:w-50 lg:h-72 lg:pt-150 lg:ml-25 ">
        <h1 className="cart-heading-name lg:text-5xl barlow5 text-main ">
          GIỎ HÀNG
        </h1>
      </div>

      <div className="cart-container lg:flex ">
        <div className="cart-cart lg:grid-cols-[5fr_2fr_2fr_1fr] lg:ml-25  lg:h-570 ">
          <div className="cart-column1 lg:h-570 ">
            <div className="cart-item-name  lg:pl-10">
              <div className="cart-item-name2 ">
                <h1 className="barlow4   lg:text-xl">Sản phẩm</h1>
              </div>
            </div>
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                image={item.image}
                name={item.name}
                size={item.size}
              />
            ))}
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                image={item.image}
                name={item.name}
                size={item.size}
              />
            ))}
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                image={item.image}
                name={item.name}
                size={item.size}
              />
            ))}
          </div>
          <div className="cart-column2 ">
            <div className="cart-item-amount ">
              <h1 className="barlow4 cart-item-amount-text lg:w-full lg:text-xl">
                Số lượng
              </h1>
            </div>
            <div className="cart-item-amount-number barlow3 lg:h-180">
              <Button></Button>
            </div>
            <div className="cart-item-amount-number barlow3 lg:h-180">
              <Button></Button>
            </div>
            <div className="cart-item-amount-number barlow3 lg:h-180">
              <Button></Button>
            </div>
          </div>
          <div className="cart-column3 ">
            <div className="cart-item-amount">
              <h1 className="barlow4 cart-item-amount-text lg:text-xl">
                Tổng tiền
              </h1>
            </div>
            <div className="cart-item-amount-number barlow3 lg:h-180 ">
              <h1 className="lg:text-xl text-base">550.000 VND</h1>
            </div>
            <div className="cart-item-amount-number barlow3  lg:h-180">
              <h1 className="lg:text-xl text-base">550.000 VND</h1>
            </div>
            <div className="cart-item-amount-number barlow3  lg:h-180">
              <h1 className="lg:text-xl text-base">550.000 VND</h1>
            </div>
          </div>
          <div className="cart-column4 hidden lg:block ">
            <div className="cart-item-amount">
              <h1 className="barlow4 cart-item-amount-text lg:text-xl">Xoá</h1>
            </div>
            <div className="cart-item-amount-number  lg:h-180">
              <img src={bin} className="bin" />
            </div>
            <div className="cart-item-amount-number lg:h-180 ">
              <img src={bin} className="bin" />
            </div>
            <div className="cart-item-amount-number  lg:h-180">
              <img src={bin} className="bin" />
            </div>
          </div>
        </div>
        <div className="cart-price lg:block  ">
          <div className="cart-pay  lg:w-410 lg:h-136 lg:ml-20 lg:mt-18">
            <div className="cart-total-price">
              <div className="cart-total-text  barlow4">Tổng tiền</div>
              <div className="cart-total-amount barlow4">1.650.000 VND</div>
            </div>
            <div className="cart-pay-button">
              <button className="cart-buy-button barlow4 bg-main text-white">
                THANH TOÁN
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="details-other-item md:h-80 lg:h-500  mt-25 ">
        <h1 className="barlow3 details-other-item-heading lg:text-40">
          CÁC SẢN PHẨM PHÙ HỢP VỚI BẠN
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

export default Cart;
