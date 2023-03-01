import React from "react";
import Stock from "./Stock";
import {v4 as uuid} from "uuid"

function StockContainer({stocks, addToPortfolio}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock=>
        <Stock 
          addToPortfolio={addToPortfolio}
          key={uuid()} 
          stock={stock} />
        )}
    </div>
  );
}

export default StockContainer;
