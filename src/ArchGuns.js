import React, { useState, useEffect } from "react";
import "./App.css";
import ArchGun from "./ArchGun";

function ArchGuns() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [primarys, setPrimarys] = useState([{}]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/WFCD/warframe-items/development/data/json/Arch-Gun.json"
    );
    const primarys = await data.json();
    setPrimarys(primarys);
  };
  return (
    <div className="App">
      <div className="cards">
        {primarys.map(primary => (
          <ArchGun
            key={primary.uniqueName}
            name={primary.name}
            image={primary.imageName}
            description={primary.description}
            masteryReq={primary.masteryReq}
            trigger={primary.trigger}
            noise={primary.noise}
            accuracy={primary.accuracy}
            magazineSize={primary.magazineSize}
            ammo={primary.ammo}
            reloadTime={primary.reloadTime}
            fireRate={primary.fireRate}
            criticalChance={primary.criticalChance}
            criticalMultiplier={primary.criticalMultiplier}
            statusChance={primary.procChance}
            tags={primary.tags}
            flight={primary.flight}
            type={primary.type}
            disposition={primary.disposition}
            wikiaUrl={primary.wikiaUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ArchGuns;
