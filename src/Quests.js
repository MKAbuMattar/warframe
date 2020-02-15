import React, { useState, useEffect } from "react";
import "./App.css";
import Quest from "./Quest";

function Quests() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [quests, setQuests] = useState([{}]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/WFCD/warframe-items/development/data/json/Quests.json"
    );
    const quests = await data.json();
    setQuests(quests);
  };
  return (
    <div className="App">
      <div className="box"></div>
      <div className="cards">
        {quests.map(quest => (
          <Quest
            key={quest.uniqueName}
            name={quest.name}
            image={quest.imageName}
            description={quest.description}
            url="https://warframe.fandom.com/wiki/"
          />
        ))}
      </div>
    </div>
  );
}

export default Quests;
