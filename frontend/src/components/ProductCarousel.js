/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { listTopProducts } from "../actions/productActions";
const ProductCarousel = () => {
  const dispatch = useDispatch();
  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;
  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-sm-12">
          <Carousel pause="hover" className="bg-dark">
            {products.map((product) => (
              <Carousel.Item key={product._id}>
                <Link to={`/product/${product._id}`}>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <Image
                        className="d-block w-100 img"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                  </div>
                  <Carousel.Caption className="carousel-caption">
                    <h4>
                      {product.name} ($ {product.price})
                    </h4>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
