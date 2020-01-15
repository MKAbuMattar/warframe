import React, { useState, useEffect } from "react";
import "./App.css";
import Archwing from "./Archwing";

function Archwings() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [frames, setFrames] = useState([{}]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/WFCD/warframe-items/development/data/json/Archwing.json"
    );
    const frames = await data.json();
    setFrames(frames);
  };

  return (
    <div className="App">
      <div className="cards">
        {frames.map(frame => (
          <Archwing
            key={frame.uniqueName}
            name={frame.name}
            image={frame.imageName}
            description={frame.description}
            health={frame.health}
            shield={frame.shield}
            armor={frame.armor}
            stamina={frame.stamina}
            power={frame.power}
            masteryReq={frame.masteryReq}
            sprintSpeed={frame.sprintSpeed}
            wikiaUrl={frame.wikiaUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Archwings;
