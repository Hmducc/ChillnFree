// src/components/ItemCard.tsx
import React from "react";
import "./Item.css"; // Import the CSS file for styling

interface ItemProps {
  image: string;
  name: string;
  price: string;
}

const Item: React.FC<ItemProps> = ({ image, name, price }) => {
  return (
    <div className="item-card ">
      <img src={image} alt={name} className="item-image" />
      <div className="item-details ">
        <h3 className="item-name barlow3">{name}</h3>
        <p className="item-price barlow3">{price}</p>
      </div>
    </div>
  );
};

export default Item;
