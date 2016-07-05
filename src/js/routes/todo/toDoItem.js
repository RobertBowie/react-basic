import React from 'react';

const toDoItem = ({onClick, onDoubleClick, style, text}) => {
  return (
    <li
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      style={style}>
      {text}
    </li>
  );
};

export default toDoItem;
