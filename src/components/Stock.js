import React from "react";

function Stock({stock, handleClick, isMine}) {
  return (
    <div>
      <div className="card">
        <div onClick={(e)=>handleClick(stock, isMine)} className="card-body" >
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{`${stock.ticker}: $${stock.price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
