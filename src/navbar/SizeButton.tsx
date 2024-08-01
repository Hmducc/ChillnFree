// src/components/SizeSelector.tsx
import React, { useState } from "react";
import "./SizeButton.css"; // Add your CSS file for styling

const SizeButton: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const sizes = ["S", "M", "L", "XL", "2XL"];

  return (
    <div className="size-selector">
      {sizes.map((size) => (
        <button
          key={size}
          className={`size-button barlow4 ${
            selectedSize === size ? "selected" : ""
          }`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeButton;
