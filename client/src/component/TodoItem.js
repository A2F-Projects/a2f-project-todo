import React from 'react';

//Created a todoItem with description, dueData, and priority to simulate possible task features.
const TodoItem = ({ description, dueDate, priority }) => {
  return (
    <div className="bg-gray-200 p-4 m-2 rounded-md w-96">
      <h3 className="text-xl font-bold mb-2">Description: {description}</h3>
      <p className="text-sm mb-1">Due Date: {dueDate}</p>
      <p className="text-sm">Priority: {priority}</p>
    </div>
  );
};

export default TodoItem;
