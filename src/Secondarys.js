import React, { useState, useEffect } from "react";
import "./App.css";
import Secondary from "./Secondary";

function Secondarys() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [secondarys, setSecondary] = useState([{}]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/WFCD/warframe-items/development/data/json/Secondary.json"
    );
    const secondarys = await data.json();
    setSecondary(secondarys);
  };
  return (
    <div className="App">
      <div className="cards">
        {secondarys.map(secondary => (
          <Secondary
            key={secondary.uniqueName}
            name={secondary.name}
            image={secondary.imageName}
            description={secondary.description}
            masteryReq={secondary.masteryReq}
            trigger={secondary.trigger}
            noise={secondary.noise}
            accuracy={secondary.accuracy}
            magazineSize={secondary.magazineSize}
            ammo={secondary.ammo}
            reloadTime={secondary.reloadTime}
            fireRate={secondary.fireRate}
            criticalChance={secondary.criticalChance}
            criticalMultiplier={secondary.criticalMultiplier}
            statusChance={secondary.procChance}
            tags={secondary.tags}
            flight={secondary.flight}
            type={secondary.type}
            disposition={secondary.disposition}
            wikiaUrl={secondary.wikiaUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Secondarys;
