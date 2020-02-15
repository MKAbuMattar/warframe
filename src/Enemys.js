import React, { useState, useEffect } from "react";
import "./App.css";
import Enemy from "./Enemy";

function Enemys() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [enemys, setEnemys] = useState([{}]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/WFCD/warframe-items/development/data/json/Enemy.json"
    );
    const enemys = await data.json();
    setEnemys(enemys);
  };
  return (
    <div className="App">
      <div className="box"></div>
      <div className="cards">
        {enemys.map(enemy => (
          <Enemy
            key={enemy.uniqueName}
            name={enemy.name}
            image={enemy.imageName}
            description={enemy.description}
            url="https://warframe.fandom.com/wiki/"
            type={enemy.type}
          />
        ))}
      </div>
    </div>
  );
}

export default Enemys;
