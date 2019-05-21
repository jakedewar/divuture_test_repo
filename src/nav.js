import React, { Component } from "react";

class Nav extends Component {

  render(){
    return (
      <ul className="nav nav-bar-expand{md}">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Feed</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Goals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Discover</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="accountLink" href="#">Account</a>
        </li>
      </ul>
    );
  }
};

export default Nav;
