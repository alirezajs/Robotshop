import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  NavDropdown,
  Button,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
class Header extends Component {
  render() {
    return (
      <Row noGutters >
        <Col>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Robots Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Category" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Cat1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Cat 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Cat 2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Cat 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">About Me</Nav.Link>
                <Nav.Link href="#home">Contact Me</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default Header;
