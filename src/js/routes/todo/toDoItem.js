import React from 'react';

class ToDoItem extends React.Component {
  constructor() {
    super();

    this.state = {
      style: {}
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let style = {textDecoration: 'line-through'};
    this.setState({style});
  }

  render() {
    return (
      <li onClick={this.onClick} style={this.state.style}>{this.props.text}</li>
    );
  }
};

export default ToDoItem;
