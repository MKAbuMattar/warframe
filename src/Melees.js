import React, { useState, useEffect } from "react";
import "./App.css";
import Melee from "./Melee";

function Melees() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [melees, setMelees] = useState([{}]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/WFCD/warframe-items/development/data/json/Melee.json"
    );
    const melees = await data.json();
    console.log(melees);
    setMelees(melees);
  };
  return (
    <div className="App">
      <div className="cards">
        {melees.map(melee => (
          <Melee
            key={melee.uniqueName}
            name={melee.name}
            image={melee.imageName}
            description={melee.description}
            masteryReq={melee.masteryReq}
            trigger={melee.trigger}
            fireRate={melee.fireRate}
            criticalChance={melee.criticalChance}
            criticalMultiplier={melee.criticalMultiplier}
            statusChance={melee.procChance}
            tags={melee.tags}
            flight={melee.flight}
            type={melee.type}
            disposition={melee.disposition}
            wikiaUrl={melee.wikiaUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Melees;
