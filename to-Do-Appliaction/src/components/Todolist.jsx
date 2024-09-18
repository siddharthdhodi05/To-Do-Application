import React from 'react';

function Todolist({ todolist }) {
  return (
    <div className="max-w-md mx-auto mt-8">
      <ul className="space-y-4">
        {todolist.map((todo, index) => (
          <li key={index} className="flex items-center justify-between p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm">
            <span className="text-gray-900">{todo}</span>
            <div className="flex items-center space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 14l1.586-1.586a2 2 0 012.828 0L12 14l-4 4-4-4z" />
                </svg>
              </button>
              <button className="text-red-500 hover:text-red-700">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
