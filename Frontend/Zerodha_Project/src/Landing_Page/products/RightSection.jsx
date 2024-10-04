import React from 'react';

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mt-5 p-5" style={{ marginBottom: "70px" }}>
          <h1 className="fs-4">{productName}</h1>
          <p className="fs-6">{productDescription}</p>
          <div>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img
            src={imageUrl}
            alt={`Image of ${productName}`}
            className="img-fluid"
            style={{ maxHeight: '800px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
