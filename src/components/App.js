import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isLight, setIsLight] = useState(true);

  function toggleHandler() {
    setIsLight((isLight) => !isLight);
  }

  const appClass = !isLight ? "App dark" : "App light";
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleHandler}>
          {isLight ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
