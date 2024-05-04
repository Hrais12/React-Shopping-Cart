import React from "react";

function ShoppingCart({ groceries }) {
  return (
    <div className="shoppCart">
      <h1>Shopping Cart</h1>
      <ul className="cart">
        {groceries.map((grocery, index) => (
          <div className="item">
            <li key={index} className="itemInfo">
              <img src={grocery.image} alt={grocery.name} />
              <div className="info">
                <span>
                  <b>{grocery.price}</b>
                  <br></br>
                </span>

                <span>
                  {grocery.name} <br></br>
                </span>

                <button>Remove</button>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="Order pickup"
                      name={`deliveryMethod_${index}`}
                    />
                    Order pickup<br></br>
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Shipping"
                      name={`deliveryMethod_${index}`}
                    />
                    Shipping
                  </label>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>

      <div className="checkout">
        <b>$20 subtotal 3 items</b>
        <button className="checkoutBtn">Check out</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
