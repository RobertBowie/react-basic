import React from 'react';
import * as _ from 'react-bootstrap';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <Link to="todo" activeClassName="test">ToDo</Link>
        {" | "}
        <Link to="snake" activeClassName="test">Snake</Link>
        {" | "}
        <Link to="home" activeClassName="active">Home</Link>
      </nav>
    );
  }
}

export default Header;
