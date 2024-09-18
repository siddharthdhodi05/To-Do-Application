import React, { useState } from 'react';
import Input from './components/Input';
import Header from './components/Header';
import Todolist from './components/Todolist';

function App() {
  const [todolist, setTodolist] = useState([]);

  const addTodo = (newTodo) => {
    setTodolist([...todolist, newTodo]);
  };

  return (
    <>
      <Header />
      <Input updateList={addTodo} />
      <Todolist todolist={todolist} />
    </>
  );
}

export default App;
