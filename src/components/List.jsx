import React from "react";

function List({ currentList, action, next, back, iconBack, iconNext }) {
  return (
    <div className="groceries">
      <h1>Based on your recent browsing</h1>
      <ul className="list">
        <button onClick={back} className="carousel">
          {iconBack}
        </button>
        {currentList.map((grocery, index) => (
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
        <button onClick={next} className="carousel">
          {iconNext}
        </button>
      </ul>
    </div>
  );
}

export default List;
