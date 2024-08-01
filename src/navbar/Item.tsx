// src/components/ItemCard.tsx
import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { Typography } from "antd";

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
      <div className="item-card ">
        <img src={image} alt={name} className="item-image" />
        <div className="item-details ">
          <Text ellipsis className="item-name barlow3">
            {name}
          </Text>
          <p className="item-price barlow3">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
