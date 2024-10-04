import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
    <div className="row text-center mt-5 p-3">
      <div className="col-12">
        <h1 className="fs-4 fs-sm-2">Technology</h1>
        <h3 className="text-muted mt-3 fs-4 fs-sm-4">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-3 mb-5">
          Check out our <a href="" style={{ textDecoration: "none" }}>investment offerings <FaLongArrowAltRight /></a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default Hero