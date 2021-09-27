import React from 'react'
import './Coin.css';

const coin = ({ name, image, symbol, price, volume, priceChanged, marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{ symbol }</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${ price.toLocaleString() }</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    { priceChanged < 0 ? (<p className="coin-percent red">{
                        priceChanged.toFixed(2)}%</p>) :
                        (<p className="coin-percent green">
                            {priceChanged.toFixed(2)}%</p>)
                    }
                    <p className="coin-marketcap">Mkt Cap: { marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default coin