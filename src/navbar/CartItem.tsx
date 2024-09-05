import { Typography } from "antd";
import React from "react";
import "./CartItem.css";

const { Text } = Typography;

interface CartItemProps {
  image: string;
  name: string;
  size: string;
}

const CartItem: React.FC<CartItemProps> = ({ image, name, size }) => {
  return (
    <div className="cart-item  md:w-500  lg:w-520 lg:h-180">
      <img
        src={image}
        alt={name}
        className="cart-item-image  lg:w-32 lg:h-40"
      />
      <div className="cart-item-details ">
        <Text className="cart-item-name-details barlow3 md:text-18  lg:text-23 ">
          {name}
        </Text>
        <Text className="cart-item-size-details barlow3 md:text-base lg:text-18 lg:mt-10 ">
          • Size {size}
        </Text>
      </div>
    </div>
  );
};

export default CartItem;
