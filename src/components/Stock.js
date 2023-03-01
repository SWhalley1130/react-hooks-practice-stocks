import React from "react";
import {v4 as uuid} from "uuid";

function Stock({stock, handleClick, isMine}) {
  return (
    <div id={uuid()}>
      <div className="card">
        <div onClick={(e)=>handleClick(stock, isMine, e)} className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{`$${stock.price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
