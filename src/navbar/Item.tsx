// src/components/ItemCard.tsx
import { Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

interface ItemProps {
  image: string;
  name: string;
  price: string;
  id: string;
}
const { Text } = Typography;
const Item: React.FC<ItemProps> = ({ image, name, price, id }) => {
  return (
    <Link to={`/details/${id}`} className="item-card-link">
      <div className="item-card lg:w-80 lg:h-80 md:h-40 md:w-40 ipad-pro:h-60 ipad-pro:w-60   ">
        <img
          src={image}
          alt={name}
          className="  item-image lg:w-96 lg:h-60 md:w-48 md:h-30 lg:mt-0   "
        />
        <div className="item-details ">
          <Text ellipsis className="item-name lg:text-lg barlow3 lg:w-50 w-25">
            {name}
          </Text>
          <p className="item-price barlow3 lg:text-lg">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
