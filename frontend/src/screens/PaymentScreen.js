/** @format */

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, FormCheck, FormLabel } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

   if(!shippingAddress){
        navigate("/shipping")
   }


  const [paymentMethod, setPaymentMethod] = useState("Paypal");




  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod({ paymentMethod}));
    navigate('/placeorder');
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <FormLabel as="legend">Select Method</FormLabel>
          <Col>
            <FormCheck
              type="radio"
              label="Paypal or Credit Card"
              id="Paypal"
              name="paymentMethod"
              value="Paypal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></FormCheck>
          </Col>

          {/* <Col>
            <FormCheck
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></FormCheck>
          </Col> */}
        </Form.Group>
        <br />
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
