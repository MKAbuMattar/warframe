import React from "react";
import "./App.css";

function Primary({
  name,
  image,
  description,
  masteryReq,
  trigger,
  noise,
  accuracy,
  criticalChance,
  magazineSize,
  ammo,
  reloadTime,
  criticalMultiplier,
  fireRate,
  statusChance,
  wikiaUrl,
  tags,
  flight,
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
            Noise : {noise}
            <br />
            Accuracy: {accuracy}
            <br />
            Projectile flight speed: {flight} m/s
            <br />
            Magazine Size: {magazineSize}/{ammo}
            <br />
            Reload Time: {reloadTime}
            <br />
            Fire Rate: {fireRate}
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

export default Primary;
