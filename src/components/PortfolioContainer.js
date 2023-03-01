import React from "react";
import Stock from "./Stock";
import {v4 as uuid} from "uuid";

function PortfolioContainer({myPortfolio, handleClick}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myPortfolio.map(stock=>
          <Stock 
            handleClick={handleClick}
            isMine={true}
            key={uuid()} 
            stock={stock}/>
          )
      }
    </div>
  );
}

export default PortfolioContainer;
