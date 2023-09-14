import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../component/cards";

const CardList = () => {
  const [cardsList, setCardsList] = useState([]);
  const [clickSubmit, setClickSubmit] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    renderCards();
  }, [clickSubmit, searchInput]);

  const renderCards = () => {
    axios
      .get(`/cards/get`)
      .then((res) => {
        const tasks = res.data.filter((task) => task.title.toLowerCase().includes(searchInput.toLowerCase()));
        console.log(searchInput);
        setCardsList(tasks);

        console.log("setCardsList");
        console.log(tasks);
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  const submitNewCard = (e) => {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;
    let date = document.getElementById("date").value;
    console.log(title);
    axios
      .post(`/cards/post`, {
        title: title,
        desc: desc,
        date: date,
      })
      .then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    setClickSubmit(!clickSubmit);
    document.getElementById("form").reset();
  };

  return (
    <section>
        <div className="search-bar">
          <input type="text" value={searchInput} onChange={handleChange} placeholder="Search" className="border-4 bg-gray-200 m-2"/>
        </div>

    

        <div className="flex flex-col">
            <ul className="border-4 border-yellow-500 rounded-lg p-4 max-h-80 overflow-y-auto list-none">
            {cardsList.length > 0 ? (
                cardsList.map((card) => (
                <li key={card._id}>
                    <Card title={card.title} desc={card.desc} date={card.date}/>
                </li>
                ))
            ) : (
                <p>No cards available.</p>
            )}
            </ul>
        </div>
       
        <div>
        <form id="form">
            <div>
              <label>Enter card title:</label>
              <input name="title" id="title" type="text" required></input>
            </div>
            <div>
              <label>Enter description:</label>
              <input name="desc" id="desc" type="text" required></input>
            </div>
            <div>
              <label>Enter card title:</label>
              <input name="date" id="date" type="date" required></input>
            </div>
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full"
              name="button"
              type="submit"
              onClick={(e) => submitNewCard(e)}
            >
              +
            </button>
          </form>
        </div>

      
    </section>
  );
};

export default CardList;