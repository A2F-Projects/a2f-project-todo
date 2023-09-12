import React, { useState } from 'react';

const SearchBar = () => {

    const[input, setInput] = useState('');

    const handleChange = async (e) => {
        setInput(e.target.value);

        const response = await ((await fetch('')).json());
        const tasks = responses.filter((task) => task.title.includes(input));

        
        
        
    }

    return (
        <div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => handleChange(e)}
                placeholder="Search" 
                className="border-4 bg-gray-200 m-2"
            />
        </div>
    );
}

export default SearchBar; 