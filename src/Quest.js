import React from "react";
import "./App.css";

function Quest({ name, image, description, url }) {
  return (
    <div className="cards__item">
      <div className="card">
        <img
          className="card__image"
          src={`https://cdn.warframestat.us/img/${image}`}
          alt=""
          height="20%"
          width="100%"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">
            Description:
            <br />
            {description}
            <br />
          </p>
          <a className="btn" href={url + name} target="__blank">
            {name} (Wiki Link)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Quest;
