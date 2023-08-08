import React, { useState } from 'react';
import AddTaskButton from './AddTask'; // Import the button component
import EmptyCard from './EmptyCard';

const ToDoList = () => {
  const [emptyCards, setEmptyCards] = useState([<div className="bg-gray-200 p-4 m-2 rounded-md w-96">
  {/* This is so that our list is visible and starts with an empty card */}
  Empty Card
</div>]);

  // Function to add a new task to the todo list
  const addCard = () => {
    setEmptyCards((currCards) => [...currCards, {id: currCards.length}]); //"..." copies all the values from the old array

  };

  return (
    <div className="flex flex-col">
      <ul className="border-4 border-yellow-500 max-h-80 overflow-y-auto list-none">
        {emptyCards.map((card) => ( //map is what renders the data into the screen
          <li key={card.id }>
            <EmptyCard/>
          </li>
        ))}
      </ul>
      {/* placed button into its own div to help with placing on the page */}
      <div className="self-end">
            <AddTaskButton onClick  ={addCard}/> 
        </div>
      
    
    </div>
  );
};

export default ToDoList;

