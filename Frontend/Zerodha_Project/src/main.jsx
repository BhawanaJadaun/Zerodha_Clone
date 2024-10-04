import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Landing_Page/Navbar.jsx"
import Footer from "./Landing_Page/Footer.jsx"
import HomePage from './Landing_Page/home/HomePage.jsx';
import SignUp from './Landing_Page/sign_up/SignUp.jsx';
import Login from './Landing_Page/login/Login.jsx';
import AboutPage from "./Landing_Page/about/AboutPage.jsx";
import ProductPage from "./Landing_Page/products/ProductPage";
import PricingPage from "./Landing_Page/Pricing/PricingPage.jsx";
import SupportPage from "./Landing_Page/support/SupportPage";
import Notfound from "./Landing_Page/Notfound.jsx";
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<Notfound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
