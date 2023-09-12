import React from "react";

const Card = (props) => {
  const { title, desc, date } = props;
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="p-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">Description: {desc}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">Date: {date}</p>
          {/* You can add additional buttons or icons here */}
        </div>
      </div>
    </div>
  );
};

export default Card;
