import React from 'react';

const AddTaskButton = ({ onClick }) => {
  return <button class="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full" onClick={onClick}>Add Task</button>;
};

export default AddTaskButton;

