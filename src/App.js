import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import "./App.css";

import HomePage from "./customer/Pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap your components with Router */}
      <div>
        <Navigation />
        <div>
          {/*<HomePage />*/}
          {/*<Product />*/}
          {/*<ProductDetails />*/}
          {/* <Cart/> */}
          <Checkout />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// React Alice Carousel
