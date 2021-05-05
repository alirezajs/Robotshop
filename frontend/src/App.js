import React from "react";
import Cart from "./containers/Cart";
import ProductList from "./containers/ProductList";
import { Container, Row, Col } from "react-bootstrap";
import { Header, Footer } from "./components/Layout";

const App = () => {
  return (
    <Container fluid>
      <Header></Header>
      <Container className="py-3">
        <Row>
          <Col xs={12}>
            <h1>Robot Shop</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={9}>
            <ProductList />
          </Col>
          <Col xs={3}>
            <Cart />
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
};

export default App;
