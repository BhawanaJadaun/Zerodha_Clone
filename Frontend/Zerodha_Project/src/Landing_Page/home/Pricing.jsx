import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Pricing = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-12 col-md-5 mb-4 mb-md-0"> {/* Full width on small screens, 5 columns on medium and up */}
            <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
            <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href="#" style={{ textDecoration: "none" }}>
              See Pricing <FaLongArrowAltRight />
            </a>
          </div>

          {/* Spacer for medium and larger screens */}
          <div className="col-12 col-md-1 d-none d-md-block"></div>

          {/* Pricing Section */}
          <div className="col-12 col-md-6">
            <div className="row text-center">
              <div className="col-12 col-md-6 p-3 border mb-3 mb-md-0"> {/* Each column takes full width on small screens */}
                <h1 className="mb-3">₹0</h1>
                <p>Free equity delivery and <br /> direct mutual funds</p>
              </div>
              <div className="col-12 col-md-6 p-3 border">
                <h1 className="mb-3">₹20</h1>
                <p>Intraday F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
