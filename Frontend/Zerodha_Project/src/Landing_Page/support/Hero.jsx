import React from "react";
import "./support.css";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h5 className="m-3">Support Portal</h5>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 m-3">
        <div className="col-lg-6 col-md-12 p-3">
          <h5 className="fs-5">
            Search for an answer or browse help topics to create a ticket
          </h5>
          <div className="search-wrapper">
            <input
              placeholder="Eg. how do I activate F&O, why is my order getting rejected"
              className="search-input mt-5"
            />
            <IoIosSearch className="search-icon" />
          </div>

          <div className="mt-3">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol className="ol">
            <li>
              <a href="">Surveillance measure on scrips - September 2024</a>
            </li>
            <br />
            <li>
              <a href="">Rights Entitlements listing in September 2024</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
