import React from 'react'
import "bulma/css/bulma.css";
import styles from "./Header.module.css"
import icono from "../../assets/icono.jpeg"

const Header = () => {
  return (
    <nav className={`${styles["contenedor"]} navbar`} role="navigation" aria-label="main navigation">
      <a className="navbar-brand" href="https://rickandmortyapi.com/">
          <img src={icono} alt="" className={styles["imagen"]}/>
      </a>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-end">
      <a className={`${styles["item"]} navbar-item`} href='https://rickandmortyapi.com/documentation'>
        Docs
      </a>
      <a className={`${styles["item"]} navbar-item`} href='https://rickandmortyapi.com/about'>
          About
      </a>
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-white is-rounded is-outlined" href='https://rickandmortyapi.com/support-us'>
            <strong>Support us</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
};

export default Header