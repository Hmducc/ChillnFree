import React from "react";
import "./CartItem.css";
import { Typography } from "antd";

const { Text } = Typography;

interface CartItemProps {
  image: string;
  name: string;
  size: string;
}

const CartItem: React.FC<CartItemProps> = ({ image, name, size }) => {
  return (
    <div className="cart-item">
      <img src={image} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <Text className="cart-item-name-details barlow3">{name}</Text>
        <Text className="cart-item-size-details barlow3">• Size {size}</Text>
      </div>
    </div>
  );
};

export default CartItem;
