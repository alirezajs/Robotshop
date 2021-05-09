import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
class Footer extends Component {
  render() {
    return (
      <Row noGutters>
        <Col>
          <footer className="footer p-3 bg-light navbar fixed-bottom">
            <small>
              made by
              <a href="https://www.linkedin.com/in/alireza-varmaghani/">
                Alireza varmaghani
              </a>
              , source code available on{" "}
              <a href="https://github.com/krzysu/reactjs-shopping-cart">
                github
              </a>
            </small>
          </footer>
        </Col>
      </Row>
    );
  }
}
export default Footer;
