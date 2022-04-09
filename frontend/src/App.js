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
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceorderScreen from "./screens/PlaceorderScreen";
import OrderScreen from "./screens/OrderScreen"
import UserListScreen from "./screens/UserListScreen";
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
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceorderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
