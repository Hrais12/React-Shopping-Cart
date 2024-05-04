import "./App.css";
import { useState } from "react";
import groceries from "./models/list.js";

import List from "./components/List";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  let [shopCart, setShopCart] = useState([]);
  let [total, setTotal] = useState(0);
  let [count, setCount] = useState(0);

  const addItem = (item) => {
    setShopCart([...shopCart, item]);
    setTotal(totalPrice(item));
    setCount((count += 1));
  };

  const removeItem = (index) => {
    const updatedCart = [...shopCart];
    updatedCart.splice(index, 1); //return the deleted item
    setShopCart(updatedCart); // the updated array
  };

  const totalPrice = (item) => {
    let currentTotal = 0;
    shopCart.map(
      (cart) => (currentTotal += parseFloat(cart.price.replace("$", "")))
    );
    return currentTotal + parseFloat(item.price.replace("$", ""));
  };

  return (
    <div className="App">
      <List groceries={groceries} action={addItem} />
      <ShoppingCart
        shopCart={shopCart}
        action={removeItem}
        totalPrice={totalPrice}
        total={total}
        countItems={count}
      />
    </div>
  );
}

export default App;
