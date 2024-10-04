import React from 'react'
import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";
import kite from "../../assets/kite.png"
import coin from "../../assets/coin.png"
import vercity from "../../assets/varsity.png"
import Console from "../../assets/console.png"
import KiteConnect from "../../assets/kiteconnect.png"
const ProductPage = () => {
  return (
    <div>
      <Hero/>
      <LeftSection imageUrl = {kite}
  productName = "Kite"
  productDescription = "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  tryDemo = ""
  learnMore = ""
  googleplay = ""
  appStore = ""
  />
<RightSection imageUrl = {Console}
  productName = "Console"
  productDescription = "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
  learnMore = ""/>

<LeftSection imageUrl = {coin}
  productName = "Coin"
  productDescription = "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
  tryDemo = ""
  learnMore = ""
  googleplay = ""
  appStore = ""
  />
<RightSection imageUrl = {KiteConnect}
  productName = "Kite Connect API"
  productDescription = "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
  learnMore = ""/>

       <LeftSection imageUrl = {vercity}
  productName = "Varsity mobile"
  productDescription = "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
  tryDemo = ""
  learnMore = ""
  googleplay = ""
  appStore = ""
  />
  <p className = "text-center mt-3 font-medium" style = {{fontSize:"18px"}}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
      
      <Universe/>
    </div>
  )
}

export default ProductPage