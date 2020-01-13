import React from "react";
import "./App.css";

function Sentinel({
  name,
  image,
  description,
  health,
  shield,
  armor,
  stamina,
  power,
  wikiaUrl
}) {
  return (
    <div className="cards__item">
      <div className="card">
        <img
          className="card__image"
          src={`https://cdn.warframestat.us/img/${image}`}
          alt=""
          height="20%"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">
            Description:
            <br />
            {description}
          </p>
          <p className="card__text">
            Health: {health}
            <br />
            Shield: {shield}
            <br />
            Armor: {armor}
            <br />
            Stamina: {stamina}
            <br />
            Power: {power}
          </p>
          <a class="btn" href={wikiaUrl} target="__blank">
            {name} (Wiki Link)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sentinel;
