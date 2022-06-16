import React from "react";
import { useState } from "react";
import styles from "./Hero.module.css";
import "bulma/css/bulma.css";


const Hero = ({handleSearch}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  return (
    <section className={`${styles["fondo"]} hero is-fullheight`}>
      <div className={styles["search-bar"]}>
        <div className="field is-grouped">
          <p className="control is-expanded ">
            <input
              className="input"
              type="text"
              placeholder="Rick Sanchez"
              onChange={handleChange}
            />
          </p>
          <p className="button is-white is-rounded is-outlined" onClick={ ()=> handleSearch(searchValue)}>
            Search
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
