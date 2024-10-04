import React from 'react';
import home_hero from "../../assets/homeHero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="container py-5">
      <div className="row text-center align-items-center">
        {/* Image Section */}
        <div className="col-12 mb-4">
          <img 
            src={home_hero} 
            alt="Hero-img" 
            className="img-fluid mb-4" 
            style={{ maxWidth: "100%", height: "auto" }} // Ensures responsiveness
          />
        </div>
        
        {/* Text Section */}
        <div className="col-12">
          <h1 className="mt-3">Invest in Everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>
        </div>
        
        {/* Button Section */}
        <div className="col-12">
        <Link to="/signup" ><button 
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "100%", maxWidth: "250px" }} // 100% width on mobile, max width on larger screens
          >
            SignUp Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
