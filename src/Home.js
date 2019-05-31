import React from 'react';
import Login from "./components/LogIn.js";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export const Home = () => (
  <div>
    <h1> Welcome to Divuture!</h1>
    <Container>
      <Image src="./images/DivutureImg1.png" rounded />
    </Container>
    <Login />
  </div>
)
