import React from 'react';
import { FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

const toDoInput = ({inputTip, inputVal, onChange, onSubmit, placeholder}) => {
  return (
    <form onSubmit={onSubmit} autoComplete={false}>
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

export default toDoInput;
