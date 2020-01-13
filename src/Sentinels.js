import React, { useState, useEffect } from "react";
import "./App.css";
import Sentinel from "./Sentinel";

function Sentinels() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [frames, setFrames] = useState([{}]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/WFCD/warframe-items/development/data/json/Sentinels.json"
    );
    const frames = await data.json();
    console.log(frames);
    setFrames(frames);
  };

  return (
    <div className="App">
      <div className="cards">
        {frames.map(frame => (
          <Sentinel
            key={frame.uniqueName}
            name={frame.name}
            image={frame.imageName}
            description={frame.description}
            health={frame.health}
            shield={frame.shield}
            armor={frame.armor}
            stamina={frame.stamina}
            power={frame.power}
            wikiaUrl={frame.wikiaUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Sentinels;
