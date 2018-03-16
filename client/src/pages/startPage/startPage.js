import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import logo from "../../components/img/logo.png"

const startPage = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">

          <h1>Welcome to Tool N Tool</h1>          
          <h1>
              Start page.
          </h1>
          <img src={logo} />

      </Col>
    </Row>
  </Container>
);

export default startPage;
