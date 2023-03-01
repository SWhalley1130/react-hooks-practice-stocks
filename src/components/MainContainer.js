import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, addToPortfolio, myPortfolio}) {
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            addToPortfolio={addToPortfolio}
            stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myPortfolio={myPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
