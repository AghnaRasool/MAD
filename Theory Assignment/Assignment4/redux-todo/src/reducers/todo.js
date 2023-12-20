// src/reducers/todos.js

import { v4 as uuidv4 } from 'uuid';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: uuidv4(), text: action.payload.text, completed: false }
      ];

    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );

    // Add other cases as needed...

    default:
      return state;
  }
};

export default todoReducer;