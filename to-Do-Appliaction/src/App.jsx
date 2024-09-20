import React, { useState } from 'react';
import Input from './components/Input';
import Header from './components/Header';
import Todolist from './components/Todolist';

function App() {
  const [todolist, setTodolist] = useState([]);

  const addTodo = (newTodo) => {
    setTodolist([...todolist, newTodo]);
  };

  const delitem = (index) => {
    const newarr = [...todolist];  // Copy current todos
    newarr.splice(index, 1);  // Remove the item at the specified index
    setTodolist(newarr);  // Update state with the new array
  };

  return (
    <>
      <Header />
      <Input updateList={addTodo} />
      {todolist.map((item, index) => (
        <Todolist item={item} key={index} del={delitem} index={index} />
      ))}
    </>
  );
}

export default App;
