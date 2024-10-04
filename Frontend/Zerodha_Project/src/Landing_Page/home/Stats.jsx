import React from 'react';
import eco_system from "../../assets/ecosystem.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="container p-3">
      <div className="row p-5 align-items-center">
        {/* Text Section */}
        <div className="col-12 col-lg-6 p-4">
          <h1 className="fs-2 mb-5">Trust with Confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 13+ crore customers trust Zerodha with 3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification" or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The Zerodha Universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech
            startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate
            transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-12 col-lg-6 p-4 text-center">
          <img
            src={eco_system}
            alt="Ecosystem"
            className="img-fluid mb-4" // img-fluid makes image responsive
            style={{ maxWidth: "90%" }}
          />

          {/* Links Section */}
          <div className="d-flex justify-content-center flex-column flex-lg-row">
            <a href="#" className="mx-3 mb-3" style={{ textDecoration: "none" }}>
              Explore Our Products <FaLongArrowAltRight />
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite <FaLongArrowAltRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
