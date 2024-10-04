import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import Education_svg from "../../assets/education.svg";

const Education = () => {
  return (
    <div className="container mb-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 col-12 mb-4">
          <img 
            src={Education_svg} 
            alt="Education" 
            className="img-fluid" 
            style={{ maxWidth: "70%" }} // Responsive width
          />
        </div>
        
        {/* Text Section */}
        <div className="col-md-6 col-12">
          <h1 className="mb-3 fs-2">Free and Open Market Education</h1>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="" style={{ textDecoration: "none" }}>Varsity <FaLongArrowAltRight /> </a>
          
          <p className="mt-5">TradingQ&A, the most active trading and investment community in India for all your market-related queries.</p>
          <a href="" style={{ textDecoration: "none" }}>TradingQ&A <FaLongArrowAltRight /> </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
