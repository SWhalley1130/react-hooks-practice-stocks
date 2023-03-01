import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({stocks, handleClick, myPortfolio}) {

  const [sortByWhat, setSortByWhat]=useState('');
  const [filterBy, setFilterBy]=useState('');

  if (sortByWhat==="Alphabetically")
  {
    stocks.sort((a,b)=>a.name.localeCompare(b.name))
  }
  else if (sortByWhat==="Price")
  {
    stocks.sort((a,b)=>a.price-b.price)
  }

  let catFilter=stocks.filter(item=>
  {
    if (filterBy==="")
    {
      return true;
    }
    else
    {
      return item.type===filterBy;
    }
  });

  return (
    <div>
      <SearchBar
        setFilterBy={setFilterBy} 
        setSortByWhat={setSortByWhat}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
            handleClick={handleClick}
            stocks={catFilter}/>
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
