import React from 'react';
import { Link } from "react-router-dom";

const OpenAccount = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        {/* Heading */}
        <h1 className="mt-5">Open a Zerodha Account</h1>
        <p className="px-3">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades</p>
        
        {/* Sign Up Button */}
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <button
            className="btn btn-primary fs-5 p-2 mb-5"
            style={{ width: "100%", maxWidth: "300px", margin: "0 auto", display: 'block' }}
          >
            Sign Up Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OpenAccount;
