import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import {v4 as uuid} from "uuid";

function App() {
  const [stocks, setStocks]=useState([]);
  const [myPortfolio, setMyPortfolio]=useState([]);

  useEffect(()=>
  {
    fetch(`http://localhost:3001/stocks`)
    .then(res=>res.json())
    .then(data=>setStocks(data))
  },[]);

  function handleClick(stock, isMine)
  {
    if (isMine)  
      {
        setMyPortfolio(myPortfolio.filter(item=>item.id!==stock.id));
      }
      else 
      {
        let newStock={
          id: uuid(),
          name: stock.name,
          price: stock.price
        };
        setMyPortfolio([...myPortfolio, newStock]);
      }
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
