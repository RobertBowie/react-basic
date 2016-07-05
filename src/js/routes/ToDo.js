import React from 'react';
import { Button, Row, Col, Grid } from 'react-bootstrap';


class ToDo extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={4} md={4}></Col>
          <Col xs={8} md={4}><h1>ToDo</h1></Col>
          <Col xsHidden md={4}></Col>
        </Row>
        <Row>
          <Col xs={4} md={4}></Col>
          <Col xs={8} md={4}><input /></Col>
          <Col xsHidden md={4}></Col>
        </Row>
      </Grid>
    );
  }
}

export default ToDo;
