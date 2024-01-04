import React from 'react';

function Greeting({ message }) {
  return (
    <div className="text-center mt-4">
      <h1 className="text-3xl font-bold  mb-2 p-5">Enhanced Todo List</h1>
      <h1 className="text-lg mb-2 ml-2 mr-2">{message}</h1>
    </div>
  );
}

export default Greeting;