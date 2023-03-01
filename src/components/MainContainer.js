import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, handleClick, myPortfolio}) {
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            handleClick={handleClick}
            stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer 
            handleClick={handleClick}
            myPortfolio={myPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
