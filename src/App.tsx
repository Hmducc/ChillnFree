import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Cart from "./navbar/Cart";
import Contact from "./navbar/Contact";
import Details from "./navbar/Details";
import Footer from "./navbar/Footer";
import Homepage from "./navbar/Homepage";
import Login from "./navbar/Login";
import Navigation from "./navbar/Navigation";
import NewArrival from "./navbar/NewArrival";
import Product from "./navbar/Product";
import SignUp from "./navbar/SignUp";
import ScrollToTop from "./ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <MainContent />
      </ScrollToTop>
    </Router>
  );
};

const MainContent: React.FC = () => {
  const location = useLocation();
  const hideNavAndFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!hideNavAndFooter && <Navigation />}

      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/arrival" element={<NewArrival />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </div>
  );
};

export default App;
