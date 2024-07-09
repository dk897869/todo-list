// src/App.js
import React, { useState } from 'react';
import TodoList from './component/TodoList';
import '../src/style.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const handleUpdateTodo = () => {
    if (input.trim()) {
      setTodos(todos.map(todo => 
        todo.id === currentTodo.id ? { ...todo, text: input } : todo
      ));
      setInput('');
      setIsEditing(false);
      setCurrentTodo(null);
    }
  };

  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setInput(todo.text);
    setCurrentTodo(todo);
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <button onClick={isEditing ? handleUpdateTodo : handleAddTodo}>
        {isEditing ? 'Update' : 'Add'}
      </button>
      <TodoList
        todos={todos}
        onToggleTodo={handleToggleTodo}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
      />
    </div>
  );
}

export default App;
