import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function filterCategory(event) {
    console.log(`target: ${event.target.value}`);
    setSelectedCategory(event.target.value);
    console.log(`category: ${selectedCategory}`);
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items" value={selectedCategory}>
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
