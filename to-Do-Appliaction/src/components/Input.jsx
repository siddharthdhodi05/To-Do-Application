import React, { useState } from 'react'

function Input({updateList}) {
  let [Input,setInput] = useState("")
  return (
    <>
     <div className="flex items-center justify-center mt-4">
     <form>
      <input
      onChange= {(e) =>{
        setInput(e.target.value)
      }}
    type="text"
    value={Input}
    placeholder="Enter a new todo"
    className="w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
  />
  <button
    onClick={(e) =>{
      e.preventDefault()
      updateList(Input)
      setInput("")
    }}
    type='submit'
    className="ml-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  >
    Add
  </button>

     </form>
  
</div>

    </>
  )
}

export default Input
