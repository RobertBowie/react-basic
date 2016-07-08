import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

const PlayArea = ({board}) => {

  return (
    <div>
      <table>
        <tbody>
          {
          board.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default PlayArea;
