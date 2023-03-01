import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks]=useState([]);
  const [myPortfolio, setMyPortfolio]=useState([]);

  useEffect(()=>
  {
    fetch(`http://localhost:3001/stocks`)
    .then(res=>res.json())
    .then(data=>setStocks(data))
  },[]);

  function addToPortfolio(stock)
  {
    setMyPortfolio([...myPortfolio, stock])
  }

  return (
    <div>
      <Header />
      <MainContainer 
        myPortfolio={myPortfolio}
        addToPortfolio={addToPortfolio}
        stocks={stocks} />
    </div>
  );
}

export default App;
