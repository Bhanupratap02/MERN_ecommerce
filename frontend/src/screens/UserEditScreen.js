/** @format */

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails , updateUser} from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import { USER_UPDATE_BYADMIN_RESET } from "../constants/userConstants"
const UserEditScreen = () => {
    const match = useParams();
    const userId = match.id
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isAdmin,setIsAdmin] = useState(false)
  const { search } = useLocation();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
   const userUpdate = useSelector((state) => state.userUpdate);
   const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = userUpdate;
  const navigate = useNavigate();
  useEffect(() => {
    if(successUpdate){
     dispatch({type:USER_UPDATE_BYADMIN_RESET})
     navigate("/admin/userlist")
    }else{
 if (!user.name || user._id !== userId) {
   dispatch(getUserDetails(userId));
 } else {
   setName(user.name);
   setEmail(user.email);
   setIsAdmin(user.isAdmin);
 }
    }
   
  }, [user,navigate,dispatch,userId,successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
   dispatch(updateUser({ _id:userId , name , email, isAdmin}))
  };

  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader/>}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isadmin">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

           

            <br></br>
            <Button type="submit" variant="primary" onClick={submitHandler}>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
