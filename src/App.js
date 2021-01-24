import React from 'react';
import AddTodo from './component/AddTodo';
import TodoList from "./component/TodoList";
import './App.css';

const App  = ()  => {
  return (
    <div className="App">
      <AddTodo />
      <TodoList/>
    </div>
  );
}

export default App;
