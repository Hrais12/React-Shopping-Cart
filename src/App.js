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
    const deletedItem = updatedCart.splice(index, 1); //return the deleted item array
    console.log(deletedItem);
    // Calculate the difference between the current total and the price of the removed item
    const deletedItemPrice = Number(deletedItem[0].price.replace("$", ""));
    const newTotal = total - deletedItemPrice;
    setShopCart(updatedCart); // the updated array
    setTotal(newTotal);
    setCount((count -= 1));
  };

  const totalPrice = (item) => {
    let currentTotal = 0;
    shopCart.map(
      (cart) => (currentTotal += Number(cart.price.replace("$", "")))
    );
    return currentTotal + Number(item.price.replace("$", ""));
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
