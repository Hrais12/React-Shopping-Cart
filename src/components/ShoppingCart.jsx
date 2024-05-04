import React from "react";

function ShoppingCart({ shopCart, action }) {
  return (
    <div className="shoppCart">
      <h1>Shopping Cart</h1>
      <ul className="cart">
        {shopCart.map((cart, index) => (
          <div className="item">
            <li key={index} className="itemInfo">
              <img src={cart.image} alt={cart.name} />
              <div className="info">
                <span>
                  <b>{cart.price}</b>
                  <br></br>
                </span>

                <span>
                  {cart.name} <br></br>
                </span>

                <button onClick={() => action(index)}>Remove</button>
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
