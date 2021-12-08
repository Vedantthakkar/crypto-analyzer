import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Navigation.css";
import { Container } from "react-bootstrap";

import { Form, FormControl, Button } from "react-bootstrap";
const Navigation = ({ ApiGet, Rename }) => {
  const handleClick = () => {
    let x = "";
    x = document.getElementById("name").value;
    //console.log(x);
    Rename(x);
  };

  return (
    <div>
      <Navbar
        style={{ width: "100%", height: "60px" }}
        bg="dark"
        expand="lg"
        header
      >
        <Container>
          <div className="navigation__brand" href="#home">
            Crypto Prediction
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* <Nav.Link href="#features">Overview</Nav.Link>
          <Nav.Link href="#pricing">Blog</Nav.Link> */}
          <div className="navbar-collapse justify-content-center ">
            <Form className="d-flex ">
              <FormControl
                id="name"
                type="search"
                name="myCountry"
                placeholder="Search Stocks..."
                className="me-2 autocomplete"
                aria-label="Search"
                onKeyUp={handleClick}
                style={{ width: "500px" }}
              />

              <Button
                variant="outline-success"
                className="autocomplete"
                onClick={ApiGet}
              >
                Search
              </Button>
            </Form>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;
