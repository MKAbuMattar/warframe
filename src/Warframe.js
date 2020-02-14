import React, { useState, useEffect } from "react";
import "./App.css";
import Frame from "./Frame";

function Warframe() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [frames, setFrames] = useState([{}]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/WFCD/warframe-items/development/data/json/Warframes.json"
    );
    const frames = await data.json();
    setFrames(frames);
  };

  return (
    <div className="App">
      <div className="box"></div>
      <div className="cards">
        {frames.map(frame => (
          <Frame
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
            passiveDescription={frame.passiveDescription}
            sex={frame.sex}
            wikiaUrl={frame.wikiaUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Warframe;
