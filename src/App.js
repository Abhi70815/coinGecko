import axios from 'axios'
import React, { useState } from 'react'
import TableRow from './TableRow';
import './App.css'

const App = () => {
  const [coinsData, setCoinData]=useState([]);
  const coinData=()=>{
    axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(data=> setCoinData(data.data))
    .catch(error => console.log(error));
  };
  coinData();

  return (
   <table>
    <tr>
      <th>Name</th>
      <th>Symbol</th>

      <th>Logo</th>
      <th>Current Price</th>

      <th>marketCap</th>
      <th>High</th>
      <th>Low</th>

    </tr>
     {coinsData.map((coin)=>{

      return <TableRow coin={coin}/>
     })}
   </table>
  )
}

export default App