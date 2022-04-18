/** @format */

import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import {Helmet} from "react-helmet"
import ProductCarousel from "../components/ProductCarousel"
import { listProducts } from "../actions/productActions";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useLocation, useParams } from "react-router-dom";
import Meta from "../components/Meta";
import Paginate from "../components/Paginate";
const HomeScreen = () => {
  let match = useParams();
  const keyword = match.keyword;
  // console.log(keyword);
  const pageNumber = match.pageNumber || 1;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  return (
    <> 
   <Meta/>
     {!keyword ?  <ProductCarousel/> : <Link to="/" className="btn btn-light"> Go Back</Link> }
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
            ;
          </Row>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
