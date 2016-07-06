import React from 'react';
import { Button, Row, Col, Grid } from 'react-bootstrap';
import { map as _map } from 'lodash';

import ToDoInput from './todo/toDoInput';
import ToDoItem from './todo/toDoItem';

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      tip: 'Type items and press "Enter"!',
      items: {},
      input: '',
      used: 0,
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
    this.updateTip = this.updateTip.bind(this);
    this.onLiClick = this.onLiClick.bind(this);
    this.onLiDoubleClick = this.onLiDoubleClick.bind(this);
  }

  newItem() {
    return {liStyle: {}};
  }

  onInputChange(e) {
    let input = e.target.value;
    this.setState({input});
  }

  onInputSubmit(e) {
    e.preventDefault();
    const input = '';
    const currInput = this.state.input;
    let items = this.state.items;
    items[currInput] = this.newItem();
    this.setState({items, input});
    if (!this.state.used) {
      this.updateTip();
    }
  }

  updateTip(num) {
    let tip = '';
    let used = this.state.used;
    if (!used) {
      used = 1;
      tip = 'Strike an item out by clicking it.';
    } else if (used === 1 && num === 1) {
      used = 2;
      tip = 'Remove an item by double clicking it.'
    } else if (used === 2 && num === 2) {
      used = 3;
      tip = ' ';
    }
    console.log(used, num, !!tip);
    if (tip) {
      console.log('calling setState with: ', {used, tip});
      this.setState({used, tip});
    }
  }

  onLiClick(liKey, e) {
    const newStyle = {textDecoration: 'line-through'};
    let newState = this.applyStyle(newStyle, liKey);
    if (this.state.used === 1) {
      this.updateTip(1);
    }
    this.setState({newState});
  }

  onLiDoubleClick(liKey, e) {
    const newStyle = {display: 'none'};
    const newState = this.applyStyle(newStyle, liKey);
    if (this.state.used === 2) {
      this.updateTip(2);
    }
    this.setState({newState});
  }

  applyStyle(style, liKey) {
    let newState = Object.assign({}, this.state);
    let items = newState.items;
    let item = items[liKey];
    item.liStyle = style;
    return newState;
  }

  render() {
    let showList = Object.keys(this.state.items).length > 0;

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
              placeholder={this.state.used ? '' : 'All the things...'}
            />
            { showList &&
            <ul>
              {_map(this.state.items,
                (val, key) => {
                  let boundClick = this.onLiClick.bind(this, key);
                  let boundDoubleClick = this.onLiDoubleClick.bind(this, key);
                  return <ToDoItem
                    key={key}
                    text={key}
                    onClick={boundClick}
                    onDoubleClick={boundDoubleClick}
                    style={val.liStyle}
                  />
                }
              )}
            </ul>
            }
          </Col>
          <Col xsHidden md={4}></Col>
        </Row>
      </Grid>
    );
  }
}

export default ToDo;
