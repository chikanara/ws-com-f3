import React from "react";
import {Navbar} from "react-bootstrap"
import logo from "../../logo.svg"

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span style = {{color:"white",fontSize:"16px"}}>DEV ED</span>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
