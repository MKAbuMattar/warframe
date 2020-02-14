import React from "react";
import "./App.css";

function Melee({
  name,
  image,
  description,
  masteryReq,
  trigger,
  criticalChance,
  criticalMultiplier,
  fireRate,
  statusChance,
  wikiaUrl,
  tags,
  type,
  disposition
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
            Mastery Rank: {masteryReq}
            <br />
            <br />
            Description:
            <br />
            {description}
            <br />
            <br />
            Type: {type}
            <br />
            Category Factions: {tags}
            <br />
            Trigger: {trigger}
            <br />
            Attack Speed: {fireRate}
            <br />
            Riven Disposition: {disposition}
            <br />
            <br />
            Critical Chance: {criticalChance * 100}%
            <br />
            Critical Multiplier: {criticalMultiplier}X
            <br />
            Status Chance: {statusChance * 100}%
          </p>
          <a className="btn" href={wikiaUrl} target="__blank">
            {name} (Wiki Link)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Melee;
