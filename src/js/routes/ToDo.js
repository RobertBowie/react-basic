import React from 'react';
import { Button, Row, Col, Grid } from 'react-bootstrap';
import { map as _map } from 'lodash';

import ToDoInput from './todo/toDoInput';
import ToDoItem from './todo/toDoItem';

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      tip: 'Type items and press "Enter".',
      items: {},
      input: '',
      used: false,
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

  updateTip() {
    const used = true;
    const tip = 'Strike an item out by clicking it.';
    this.setState({used, tip});
  }

  onLiClick(liKey, e) {
    const newStyle = {textDecoration: 'line-through'};
    let newState = Object.assign({}, this.state.items);
    newState[liKey].liStyle = newStyle;
    console.log(newState);
    this.setState({items: newState});
  }

  onLiDoubleClick(e) {
    const liStyle = {display: 'none'};
    this.setState({liStyle});
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
                  return <ToDoItem
                    key={key}
                    text={key}
                    onClick={boundClick}
                    onDoubleClick={this.onLiDoubleClick}
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
