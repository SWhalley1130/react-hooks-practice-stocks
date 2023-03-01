import React from "react";

function Stock({stock, addToPortfolio}) {
  return (
    <div>
      <div className="card">
        <div onClick={()=>addToPortfolio(stock)} className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{`$${stock.price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
