/** @format */
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React from "react";
import Footer from "./components/Footer";
import Headers from "./components/Headers";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
const App = (props) => {
  return (
    <Router>
      <Headers />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen {...props} />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/cart" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
