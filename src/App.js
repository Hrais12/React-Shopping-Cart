import "./App.css";
import { useState } from "react";
import groceries from "./models/list.js";

import List from "./components/List";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  let [shopCart, setShopCart] = useState(groceries[0]);

  return (
    <div className="App">
      <List groceries={groceries} />
      <ShoppingCart groceries={groceries} />
    </div>
  );
}

export default App;
