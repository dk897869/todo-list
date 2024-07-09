// src/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo, onEditTodo }) => {
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      <span onClick={() => onToggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => onEditTodo(todo)}>Edit</button>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
