import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./navbar/Contact";
import Navigation from "./navbar/Navigation";
import Product from "./navbar/Product";
import Homepage from "./navbar/Homepage";
import NewArrival from "./navbar/NewArrival";
import Footer from "./navbar/Footer";
import Details from "./navbar/Details";
import ScrollToTop from "./ScrollToTop";
import Cart from "./navbar/Cart";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <ScrollToTop>
          <Navigation />
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/arrival" element={<NewArrival />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Footer></Footer>
        </ScrollToTop>
      </div>
    </Router>
  );
};

export default App;
