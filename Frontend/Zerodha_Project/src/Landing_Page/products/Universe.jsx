import React from 'react';
import smallcaseLogo from "../../assets/smallcaseLogo.png";
import Streak from "../../assets/streakLogo.png";
import Sensibull from "../../assets/sensibullLogo.svg";
import ZerodhaFundHouse from "../../assets/zerodhaFundhouse.png";
import GoldenPI from "../../assets/goldenpiLogo.png";
import ditto from "../../assets/dittoLogo.png";
import { Link } from "react-router-dom";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>

        {/* Using col-12 for small screens, col-md-4 for medium and larger screens */}
        <div className="col-12 col-md-4 p-3">
          <img src={smallcaseLogo} alt="Smallcase Logo" width="100" height="auto" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

        <div className="col-12 col-md-4 p-3">
          <img src={Streak} alt="Streak Logo" width="100" height="auto" />
          <p className="text-small text-muted">Algorithmic trading platform</p>
        </div>

        <div className="col-12 col-md-4 p-3">
          <img src={Sensibull} alt="Sensibull Logo" width="100" height="auto" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img src={ZerodhaFundHouse} alt="Zerodha Fund House Logo" width="100" height="auto" />
          <p className="text-small text-muted">Mutual fund investment platform</p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img src={GoldenPI} alt="GoldenPI Logo" width="100" height="auto" />
          <p className="text-small text-muted">Bonds investment platform</p>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <img src={ditto} alt="Ditto Logo" width="100" height="auto" />
          <p className="text-small text-muted">Insurance advisory platform</p>
        </div>
        
        <Link to="/signup">
  <button 
     className="p-2 btn btn-primary fs-5 mb-5"
     style={{ width: "100%", maxWidth: "250px" }}>
    Sign Up Now
  </button>
</Link>

      </div>
    </div>
  );
};

export default Universe;
