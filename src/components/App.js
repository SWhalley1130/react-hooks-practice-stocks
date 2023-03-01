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

  function handleClick(stock, isMine, e)
  {
    console.log(e.target)
    isMine ? 
      setMyPortfolio(myPortfolio.filter(item=>item!==stock))
      :
      setMyPortfolio([...myPortfolio, stock])
  }

  return (
    <div>
      <Header />
      <MainContainer 
        myPortfolio={myPortfolio}
        handleClick={handleClick}
        stocks={stocks} />
    </div>
  );
}

export default App;
