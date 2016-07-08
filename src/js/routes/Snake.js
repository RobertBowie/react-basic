import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

import Controls from '../components/Snake/Controls';
import PlayArea from '../components/Snake/PlayArea';
import ScoreDisplay from '../components/Snake/ScoreDisplay';

class Snake extends React.Component {
  constructor() {
    super()


    this.state = {
      color: 'black',
      score: 0,
      highScore: 0,
      snakePos: [[2, 2], [3, 2], [4,2]],
      foodPos: [],
      boardSize: 10,
      board: [],
      direction: 'n'
    }

    this.updateBoard = this.updateBoard.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    const board = this.generateBoard(this.state.boardSize);
    this.setState({board}, this.updateBoard);
  }

  changeColor() {
    const color = this.state.color === 'black' ? 'red' : 'black';
    this.setState({color});
  }

  updateBoard() {
    let board = this.state.board;
    const snakePos = this.state.snakePos;
    snakePos.forEach(segment => {
      board[segment[0]][segment[1]] = 1;
    });
    this.setState({board});
  }

  generateBoard(boardSize) {
    let output = [];
    for (let i = 0; i < boardSize; i++) {
      output.push([]);
      for (let j = 0; j < boardSize; j++) {
        output[i].push(0);
      }
    }
    return output;
  }

  render() {
    let style = {color: this.state.color}
    const boardSize = this.state.boardSize;
    const board = this.state.board;
    const snakePos = this.state.snakePos;

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}><h1 onMouseEnter={this.changeColor} onMouseLeave={this.changeColor} style={style}>Snake</h1></Col>
            <Col xs={12} md={4}></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}><ScoreDisplay /></Col>
            <Col xs={12} md={4}></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}><PlayArea board={board} snakePos={snakePos} /></Col>
            <Col xs={12} md={4}></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}><Controls /></Col>
            <Col xs={12} md={4}></Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default Snake;
