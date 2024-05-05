import "./App.css";
import { useState } from "react";
import groceries from "./models/list.js";

import List from "./components/List";
import ShoppingCart from "./components/ShoppingCart";
import { symbols } from "./models/symbols.js";

function App() {
  let [shopCart, setShopCart] = useState([]);
  let [total, setTotal] = useState(0);
  let [count, setCount] = useState(0);

  let [startIndex, setStartIndex] = useState(0);
  let [endIndex, setendIndex] = useState(3);

  let initialList = groceries.slice(startIndex, endIndex + 1);
  let [currentList, setCurrentList] = useState(initialList);

  const addItem = (item) => {
    // Check if the item already exists in the cart
    const existingItemIndex = shopCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // If item exists, update its quantity
      const updatedCart = [...shopCart];
      updatedCart[existingItemIndex].quantity += 1;
      setShopCart(updatedCart);
    } else {
      // If item doesn't exist, add it to the cart
      setShopCart([...shopCart, { ...item, quantity: 1 }]);
    }

    // Update total, count, and quantity
    setTotal(totalPrice(item));
    setCount(count + 1);
  };

  const removeItem = (index) => {
    const updatedCart = [...shopCart];
    const deletedItem = updatedCart.splice(index, 1); //return the deleted item array
    console.log(deletedItem);
    // Calculate the difference between the current total and the price of the removed item
    const deletedItemPrice = Number(deletedItem[0].price.replace("$", ""));
    const newTotal = Math.round((total - deletedItemPrice) * 100) / 100;
    setShopCart(updatedCart); // the updated array
    setTotal(newTotal);
    setCount((count -= 1));
  };

  const totalPrice = (item) => {
    let currentTotal = 0;
    shopCart.map(
      (cart) => (currentTotal += Number(cart.price.replace("$", "")))
    );

    return (
      Math.round((currentTotal + Number(item.price.replace("$", ""))) * 100) /
      100
    );
  };

  const nextList = () => {
    if (endIndex < groceries.length) {
      setStartIndex((startIndex) => ++startIndex);
      setendIndex((endIndex) => ++endIndex);
      let updatedList = groceries.slice(startIndex, endIndex + 1);
      setCurrentList(updatedList);
    } else {
      setStartIndex(0);
      setendIndex(3);
      const updatedList = groceries.slice(0, 4);
      setCurrentList(updatedList);
    }
  };

  const backList = () => {
    if (endIndex > groceries.length) {
      setStartIndex((startIndex) => --startIndex);
      setendIndex((endIndex) => --endIndex);
      let updatedList = groceries.slice(startIndex, endIndex + 1);
      setCurrentList(updatedList);
    } else {
      setStartIndex(0);
      setendIndex(3);
      const updatedList = groceries.slice(0, 4);
      setCurrentList(updatedList);
    }
  };

  // const updateQuantity = (item) => {
  //   const updatedCart = shopCart.map((cartItem) => {
  //     if (cartItem.key === item.key) {
  //       return { ...cartItem, quantity: cartItem.quantity + 1 };
  //     }
  //     return cartItem;
  //   });
  //   setShopCart(updatedCart);
  // };

  return (
    <div className="App">
      <List
        action={addItem}
        currentList={currentList}
        next={nextList}
        back={backList}
        iconBack={symbols.left}
        iconNext={symbols.right}
      />

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
