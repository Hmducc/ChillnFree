// src/pages/Cart.tsx
import React from "react";
import "./Cart.css";
import gam from "../assets/gam.png";
import CartItem from "./CartItem";
import bin from "../assets/bin.png";
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
      <div className="cart-heading ">
        <h1 className="cart-heading-name barlow5 text-main ">GIỎ HÀNG</h1>
      </div>
      <div className="cart-container">
        <div className="cart-cart  ">
          <div className="cart-column1 ">
            <div className="cart-item-name">
              <div className="cart-item-name2">
                <h1 className="barlow4 cart-item-name-text">Sản phẩm</h1>
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
            <div className="cart-item-amount">
              <h1 className="barlow4 cart-item-amount-text">Số lượng</h1>
            </div>
            <div className="cart-item-amount-number barlow3 ">
              <h1>1</h1>
            </div>
            <div className="cart-item-amount-number barlow3 ">
              <h1>1</h1>
            </div>
            <div className="cart-item-amount-number barlow3 ">
              <h1>1</h1>
            </div>
          </div>
          <div className="cart-column3 ">
            <div className="cart-item-amount">
              <h1 className="barlow4 cart-item-amount-text">Tổng tiền</h1>
            </div>
            <div className="cart-item-amount-number barlow3 ">
              <h1>550.000 VND</h1>
            </div>
            <div className="cart-item-amount-number barlow3 ">
              <h1>550.000 VND</h1>
            </div>
            <div className="cart-item-amount-number barlow3 ">
              <h1>550.000 VND</h1>
            </div>
          </div>
          <div className="cart-column4 ">
            <div className="cart-item-amount">
              <h1 className="barlow4 cart-item-amount-text">Xoá</h1>
            </div>
            <div className="cart-item-amount-number ">
              <img src={bin} className="bin" />
            </div>
            <div className="cart-item-amount-number ">
              <img src={bin} className="bin" />
            </div>
            <div className="cart-item-amount-number ">
              <img src={bin} className="bin" />
            </div>
          </div>
        </div>
        <div className="cart-price ">
          <div className="cart-pay ">
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
      <div className="cart-other-item">
        <h1 className="barlow3 cart-other-item-heading">
          CÁC SẢN PHẨM PHÙ HỢP VỚI BẠN
        </h1>
        <div className="cart-productline">
          <div className="cart-product">
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
