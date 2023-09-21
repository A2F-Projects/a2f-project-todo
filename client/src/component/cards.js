import React from "react";
import axios from "axios";

const Card = (props) => {
  const { title, desc, date, id, refreshCards } = props;

  const handleCheckboxChange = () => {
    axios
      .delete(`/cards/delete/${id}`)
      .then((res) => {
        console.log(res.data); // Log success message
        refreshCards();
      })
      .catch((err) => {
        console.error("Error deleting card:", err);
      });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border p-4 mb-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="bg-gray-100 p-2 mb-2 rounded">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm mb-2">Description: {desc}</p>
      <p className="text-sm text-gray-500">Date: {date}</p>
      <div className="mt-2">
        <input
          type="checkbox"
          className="mr-2"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="checkbox">Completed</label>
      </div>
    </div>
  );
};

export default Card;
