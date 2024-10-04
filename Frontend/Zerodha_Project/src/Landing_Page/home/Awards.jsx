import React from 'react';
import largerbrokersvg from "../../assets/largestBroker.svg";
import press_logo from "../../assets/pressLogos.png";

const Awards = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-12 col-md-6 p-4 text-center">
          <img
            src={largerbrokersvg}
            alt="Largest Broker SVG"
            className="img-fluid" // img-fluid for responsive image
          />
        </div>

        {/* Text Section */}
        <div className="col-12 col-md-6 p-4">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:
          </p>
          
          {/* Two columns for lists */}
          <div className="row">
            {/* First Column */}
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            {/* Second Column */}
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds & Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Press Logos Image */}
          <div className="text-center mt-4">
            <img
              src={press_logo}
              style={{ width: "90%" }}
              alt="Press Logos"
              className="img-fluid" // img-fluid for responsive image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
