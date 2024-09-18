import React, { useState } from 'react';

function Input({ updateList }) {
  const [newTodo, setNewTodo] = useState(""); // Use state for local input management

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      updateList(newTodo); // Call the function to update the list
      setNewTodo(""); // Clear the input field
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo} // Controlled input field
          onChange={(e) => setNewTodo(e.target.value)} // Update newTodo state
          placeholder="Enter a new todo"
          className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Input;
