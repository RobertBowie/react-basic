import React from 'react';
import { Button, Row, Col, Grid } from 'react-bootstrap';

import ToDoInput from './todo/ToDoInput';

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      tip: 'Type items and press "Enter".',
      items: [],
      input: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  onInputChange(e) {
    let input = e.target.value;
    this.setState({input});
  }

  onInputSubmit(e) {
    let items = this.state.items;
    let input = '';
    items.push(this.state.input);
    this.setState({items, input});
    console.log(this.state);
  }

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
          <Col xs={8} md={4}>
            <ToDoInput
              inputTip={this.state.tip}
              onSubmit={this.onInputSubmit}
              onChange={this.onInputChange}
              inputVal={this.state.input}
            />
          </Col>
          <Col xsHidden md={4}></Col>
        </Row>
      </Grid>
    );
  }
}

export default ToDo;
