import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSelection(event) {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
  }
  const selectedItem = items.filter((item) => {
    if (selectedCategory === "All") {
      return selectedCategory;
    } else {
      return selectedCategory === item.category;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items" value={selectedItem}>
        {selectedItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
