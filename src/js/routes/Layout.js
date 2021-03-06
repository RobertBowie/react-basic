import React from 'react';
import * as _ from 'react-bootstrap';
import { Link } from 'react-router';

import Footer from '../components/Footer';
import Header from '../components/Header';


class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
