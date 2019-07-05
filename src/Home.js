import React from 'react';
import Login from "./components/LogIn.js";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export const Home = () => (
  <div id="homePage">
    <h1> Diversify Your Future </h1>
    <Container id="containerHome">
    <div id="homeDescription">
      <h2> A place to create and achieve goals with friends!</h2>
    </div>
    <div>
      <Button href="/Profile">
        Sign Up
      </Button>
    </div>
    </Container>
  </div>
)
