import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

import SnakeBoard from '../components/Snake/SnakeBoard';

class Snake extends React.Component {
  constructor() {
    super()

    this.state = {
      color: 'black'
    }

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({color: 'red'});
  }

  render() {
    let style = {color: this.state.color}
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}><h1 onMouseOver={this.changeColor} style={style}>Snake</h1></Col>
            <Col xs={12} md={4}></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={4}><h1></h1></Col>
            <Col xs={12} md={4}><SnakeBoard /></Col>
            <Col xs={12} md={4}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Snake;
