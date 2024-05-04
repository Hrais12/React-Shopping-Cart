import React from "react";

function List({ groceries, action }) {
  return (
    <div className="groceries">
      <h1>Featured items</h1>
      <ul className="list">
        {groceries.map((grocery, index) => (
          <div className="result">
            <li key={index}>
              <img src={grocery.image} alt={grocery.name} />
              <div>
                <span>
                  <b>{grocery.price}</b>
                  <br></br>
                </span>

                <span>
                  {grocery.name} <br></br>
                </span>

                <button onClick={() => action(grocery)}>Add to Cart</button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;
