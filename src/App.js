import "./App.css";
import { useState } from "react";
import groceries from "./models/list.js";

import List from "./components/List";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  let [shopCart, setShopCart] = useState([]);

  const addItem = (item) => {
    setShopCart([...shopCart, item]);
  };

  return (
    <div className="App">
      <List groceries={groceries} action={addItem} />
      <ShoppingCart shopCart={shopCart} />
    </div>
  );
}

export default App;
