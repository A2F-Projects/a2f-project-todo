import React, { useState } from 'react';
import { dummyTodoItems } from './dummyData';
import AddTaskButton from './AddTask'; // import the new button component
import TodoItem from './TodoItem'; // import the todoItem w/ its properties

const TodoList = () => {
  const [newItemDescription, setNewItemDescription] = useState('');
  const [newItemDueDate, setNewItemDueDate] = useState('');
  const [newItemPriority, setNewItemPriority] = useState('');

  // Function to add a new item to the todo list
  const handleAddItem = () => {
    const newId = dummyTodoItems.length + 1; // placeholder for now just so that is gives a unique id to each item
    const newItem = {
      id: newId,
      description: newItemDescription,
      dueDate: newItemDueDate,
      priority: newItemPriority,
    };

    // Update the state with the new task
    //Also adds the new task to our array of values. 
    dummyTodoItems.push(newItem);

    // Clear the form fields after adding the item
    setNewItemDescription('');
    setNewItemDueDate('');
    setNewItemPriority('');
  };

  return ( //this div returns the list w/ cards that already have some components to them.
    <div>
      <div className="flex flex-col">
      <ul className="border-4 border-yellow-500 rounded-lg p-4 max-h-80 overflow-y-auto list-none"> 
        {dummyTodoItems.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              description={todo.description}
              dueDate={todo.dueDate}
              priority={todo.priority}
            />
          </li>
        ))}
      </ul>
    </div>

      {/* Form with input to add new data */}
      <input
        type="text"
        placeholder="Description"
        value={newItemDescription}
        onChange={(e) => setNewItemDescription(e.target.value)}
      />
      <input
        type="date"
        value={newItemDueDate}
        onChange={(e) => setNewItemDueDate(e.target.value)}
      />
      <select
        value={newItemPriority}
        onChange={(e) => setNewItemPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* AddTask button to add new task. Made it its own div to help with styling */}
      <div className="self-end">
            <AddTaskButton onClick  ={handleAddItem}/>
        </div>
    </div>
  );
};

export default TodoList;

