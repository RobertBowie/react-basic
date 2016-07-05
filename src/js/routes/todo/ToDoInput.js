import React from 'react';
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

const ToDoInput = ({inputTip, inputVal, onChange, onSubmit, placeholder}) => {
  return (
    <form onSubmit={onSubmit}>
      <FormGroup controlId="todoInput">
        <FormControl
          type="text"
          onChange={onChange}
          placeholder={placeholder}
          value={inputVal}
        />
        <HelpBlock>{inputTip}</HelpBlock>
      </FormGroup>
    </form>
  );
};

export default ToDoInput;
