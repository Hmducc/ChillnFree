import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./navbar/Contact";
import Navigation from "./navbar/Navigation";
import Product from "./navbar/Product";
import Homepage from "./navbar/Homepage";
import NewArrival from "./navbar/NewArrival";
import Footer from "./navbar/Footer";
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation />
        {/* Navigation is placed outside of Routes */}
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/arrival" element={<NewArrival />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
};

export default App;
