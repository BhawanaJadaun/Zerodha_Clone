import React from 'react';
import { FaPlusCircle, FaUserAlt } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { RiRefundFill } from "react-icons/ri";
import { IoAtCircleOutline } from "react-icons/io5";
import { BsCoin } from "react-icons/bs";

const CreateTicket = () => {
  const iconSize = 16; // Smaller icon size

  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5">
        <h1 className="fs-4 text-center">To create a ticket, select a relevant topic</h1> {/* Smaller main heading */}

        {/* Adjusted column classes for responsiveness */}
        <div className="col-12 col-md-4 p-5 mt-2 mb-2">
          <h6><FaPlusCircle size={iconSize} /> Account Opening</h6>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Offline</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Getting started</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Charges</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company, Partnership and HUF</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Non Resident Indian (NRI)</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Online</a><br />
        </div>

        <div className="col-12 col-md-4 p-5 mt-2 mb-2">
          <h6><FaUserAlt size={iconSize} /> Your Zerodha Account</h6>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Login Credentials</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Your Profile</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Account modification and segment addition</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>CMR & DP ID</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Nomination</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Transfer and conversion of shares</a><br />
        </div>

        <div className="col-12 col-md-4 p-5 mt-2 mb-2">
          <h6><SiMarketo size={iconSize} /> Trading and Markets</h6>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Trading FAQs</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Margins</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Product and order types</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Corporate actions</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite features</a><br />
        </div>

        <div className="col-12 col-md-4 p-5 mt-2 mb-2">
          <h6><RiRefundFill size={iconSize} /> Funds</h6>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Fund withdrawal</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Adding funds</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Adding bank accounts</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>eMandates</a><br />
        </div>

        <div className="col-12 col-md-4 p-5 mt-2 mb-2">
          <h6><IoAtCircleOutline size={iconSize} /> Console</h6>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>IPO</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Portfolio</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Funds statement</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Profile</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Reports</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Referral program</a><br />
        </div>

        <div className="col-12 col-md-4 p-5 mt-2 mb-2">
          <h6><BsCoin size={iconSize} /> Coin</h6>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Understanding mutual funds and Coin</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Coin app</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>Coin web</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>National Pension Scheme (NPS)</a><br />
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
