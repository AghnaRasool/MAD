// src/components/AddTodo.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'; // Check the path

const AddTodo = ({ dispatch }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default connect()(AddTodo);