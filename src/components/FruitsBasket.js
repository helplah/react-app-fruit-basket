import React from "react";

const FruitsBasket = ({ filteredFruits }) => {
  return (
    <ul className="fruits-list">
      {filteredFruits.map(fruit => {
        return (
          <li key={fruit.type}>
            <span>{fruit.emoji + " "}</span>
            <span className="fruit-name">{fruit.type}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default FruitsBasket;
