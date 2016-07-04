import React from 'react';
import * as _ from 'react-bootstrap';
import { Link } from 'react-router';

import Footer from '../components/Footer';
import Header from '../components/Header';


class Layout extends React.Component {
  render() {
    const { history } = this.props;
    console.log(history.isActive('todo'));
    return (
      <div>
        <Header />
        {this.props.children}
        <_.ButtonGroup>
          <Link to="todo" activeClassName="test"><_.Button bsStyle="primary" bsSize="xsmall">ToDo</_.Button></Link>
          <Link to="snake" activeClassName="test"><_.Button to="snake" bsStyle="primary" bsSize="xsmall">Snake</_.Button></Link>
        </_.ButtonGroup>
        <Footer />
      </div>
    );
  }
}

export default Layout;
