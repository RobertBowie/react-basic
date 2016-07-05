import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Jumbotron>
          <h1>React project examples using ES6</h1>
            <p>Written by <a href="https://www.linkedin.com/in/robertbowie">Robert Bowie</a></p>
        </Jumbotron>
      </div>
    );
  }
}

export default HomePage;
