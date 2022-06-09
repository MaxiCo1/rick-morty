import React from "react";
import "bulma/css/bulma.css";
import styles from "./Card.module.css";




const Card = ({
  
  character: { name, image, status, species, origin, episode, url, location },
}) => {
  return (
    <section className="column is-4-desktop">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Placeholder" />
          </figure>
        </div>
        <div className={`${styles["contenido"]} card-content`}>
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <a href={url}>{name}</a>
              </p>
            </div>
          </div>

          <div className="content">
            <ul>
              <li>{species} - {status}</li>
              <li>Origin: <a href={origin.url}>{origin.name}</a></li>
              <li>Last location: <a href={location.url}>{location.name}</a></li>
              <li>Episodes: {episode.length}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
