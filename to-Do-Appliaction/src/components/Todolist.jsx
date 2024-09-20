import React from 'react';

function Todolist({ item, del, index }) {  // Capitalized the component name
  return (
    <div className="max-w-md mx-auto mt-8">
      <ul className="space-y-4">
        <li className="flex items-center justify-between p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm">
          <span className="text-gray-900">{item}</span>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => del(index)}  // Use del function correctly
              className="text-red-500 hover:text-red-700"
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Todolist;
