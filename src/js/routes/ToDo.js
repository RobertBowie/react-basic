import React from 'react';
import { Button, Row, Col, Grid } from 'react-bootstrap';
import { map as _map } from 'lodash';
import * as $ from 'jquery';

import ToDoInput from './todo/toDoInput';
import ToDoItem from './todo/toDoItem';

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      tip: 'Type items and press "Enter"',
      items: [],
      input: '',
      used: 0,
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
    this.updateTip = this.updateTip.bind(this);
    this.onLiClick = this.onLiClick.bind(this);
    this.onLiDoubleClick = this.onLiDoubleClick.bind(this);
    this.dbPost = this.dbPost.bind(this);
    this.formatThenPost = this.formatThenPost.bind(this);
  }

  componentDidMount() {
    this.serverRequest = $.get('http://127.0.0.1:7777/api/todoItems', result => {
      const itemsArr = result.map(item => {
        return {content: item.content, style: item.style, _id: item._id};
      });
      this.setState({items: itemsArr});
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  dbPost(item) {
    $.post({
      url: 'http://127.0.0.1:7777/api/todoItems',
      data: JSON.stringify(item),
      contentType: 'application/json'
    }, msg => console.log(msg) );
  }

  newItem() {
    const currInput = this.state.input;
    let item = {}; // {content: '', style: ''}
    item.content = currInput;
    item.style = '';
    this.formatThenPost(currInput);
    return item;
  }

  formatThenPost(currInput, currStyle) {
    const style = currStyle ? currStyle : '';
    const content = currInput ? currInput : '';
    const toPost = {content, style};
    this.dbPost(toPost);
  }

  onInputChange(e) {
    let input = e.target.value;
    this.setState({input});
  }

  onInputSubmit(e) {
    e.preventDefault();
    const input = '';
    let items = this.state.items;
    items.push(this.newItem());
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
    if (tip) {
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

  onLiDoubleClick(id, e) {
    const newStyle = {display: 'none'};
    const newState = this.applyStyle(newStyle, id);
    if (this.state.used === 2) {
      this.updateTip(2);
    }
    this.setState({newState});
    this.dbDelete(id);
  }

  dbDelete(key) {
    $.ajax({
      url: 'http://127.0.0.1:7777/api/todoItems/' + key,
      contentType: 'application/json',
      method: 'delete'
    }, msg => console.log(msg) );
  }

  applyStyle(style, id) {
    let items = this.state.items;
    let item = items.filter(item => item._id === id)[0];
    item.liStyle = style;
    return items;
  }

  render() {
    let showList = Object.keys(this.state.items).length > 0;
    console.log(this.state);
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
                (item, index) => {
                  let boundClick = this.onLiClick.bind(this, item._id);
                  let boundDoubleClick = this.onLiDoubleClick.bind(this, item._id);
                  return <ToDoItem
                    key={item._id}
                    text={item.content}
                    onClick={boundClick}
                    onDoubleClick={boundDoubleClick}
                    style={item.liStyle}
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
