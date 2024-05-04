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

  const removeItem = (index) => {
    const updatedCart = [...shopCart];
    updatedCart.splice(index, 1); //return the deleted item
    setShopCart(updatedCart); // the updated array
  };

  return (
    <div className="App">
      <List groceries={groceries} action={addItem} />
      <ShoppingCart shopCart={shopCart} action={removeItem} />
    </div>
  );
}

export default App;
