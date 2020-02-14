import React, { useState, useEffect } from "react";
import "./App.css";
import Mod from "./Mod";

function Mods() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [mods, setMods] = useState([{}]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/WFCD/warframe-items/development/data/json/Mods.json"
    );
    const mods = await data.json();
    setMods(mods);
  };
  return (
    <div className="App">
      <div className="box"></div>
      <div className="cards">
        {mods.map(mod => (
          <Mod
            key={mod.uniqueName}
            name={mod.name}
            image={mod.imageName}
            description={mod.description}
            url="https://warframe.fandom.com/wiki/"
            polarity={mod.polarity}
            rarity={mod.rarity}
          />
        ))}
      </div>
    </div>
  );
}

export default Mods;
