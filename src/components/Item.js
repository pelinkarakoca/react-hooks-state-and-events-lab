import React, { useState } from "react";

function Item({ name, category }) {
  const [isItem, setIsItem] = useState(true);

  function clickHandler() {
    setIsItem(!isItem);
  }

  const itemClass = !isItem ? "in-cart" : " ";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickHandler}>
        {isItem ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
