import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class ItsAlive extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>It's alive!</h1>
        <Button bsSize="large">Test</Button>
      </Jumbotron>
    )
  }
}
