import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import './App.css';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      })
      .catch(er => {
        console.log(er)
      }, [])
    
  })

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(event);
  }

  const filterCoinsHandler = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
        <form>
          <input onChange={ handleChange } type="text" className="coin-input" placeholder="Search" />
        </form>
      </div>
      {filterCoinsHandler.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChanged={coin.price_change_percentage_24h}
            marketcap={coin.market_cap} 
          />
        );
      })}
    </div>
  );
}

export default App;
