import React from "react";
import styles from "./Hero.module.css";
import "bulma/css/bulma.css";
//import img from "../../assets/titulo.webp";

const hero = () => {
  return (
    <section className={`${styles["fondo"]} hero is-fullheight`}>
      <div className={styles["search-bar"]}>
        <div className="field is-grouped">
          <p class="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Rick Sanchez"
            />
          </p>
          <p class="control">
            <a className="button is-white is-rounded is-outlined" href="asd">
              Search
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default hero;
