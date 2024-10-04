import React from 'react';
import priceEquity from "../../assets/pricingEquity.svg";
import intradayTrading from "../../assets/intradayTrades.svg";
import { Link } from "react-router-dom";
import OpenAccount from "../../Landing_Page/OpenAccount.jsx"
const Hero = () => {
  return (
    <div className="container">
      <div className="row border-bottom p-5 mt-5 text-center">
        <h1>Pricing</h1>
        <p className="text-muted fs-4">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-12 col-md-4 p-3"> {/* Adjusted for responsiveness */}
          <img src={priceEquity} alt="Free Equity Delivery" />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3"> {/* Adjusted for responsiveness */}
          <img src={intradayTrading} alt="Intraday and F&O Trades" />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-md-4 p-3"> {/* Adjusted for responsiveness */}
          <img src={priceEquity} alt="Free Direct MF" />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>

<OpenAccount/>
    </div>
  );
};

export default Hero;
