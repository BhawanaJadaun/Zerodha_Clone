import React from 'react';
import GooglePlay from "../../assets/googlePlayBadge.svg";
import AppStore from "../../assets/appstoreBadge.svg";

const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googleplay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-5">
          <img src={imageUrl} alt={productName} className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 mt-5 p-3 p-md-5">
          <h1 className="fs-4">{productName}</h1>
          <p className="fs-6">{productDescription}</p>
          <div className="d-flex flex-column flex-md-row">
            <a href={tryDemo} className="mb-2 mb-md-0 me-md-3">Try Demo</a>
            <a href={learnMore}>Learn More</a>
          </div>
          <div className="mt-3">
            <a href={googleplay} className="me-2">
              <img src={GooglePlay} alt="Get it on Google Play" className="img-fluid" />
            </a>
            <a href={appStore}>
              <img src={AppStore} alt="Download on the App Store" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
