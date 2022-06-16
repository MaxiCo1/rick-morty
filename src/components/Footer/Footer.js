import React from 'react'
import styles from "./Footer.module.css"
import twitter from "../../assets/twitter.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
        <ul>
            <li><a href='https://twitter.com/RickandMorty'><img src={twitter} alt="" /></a></li>
            <li><a href='https://www.facebook.com/RickandMorty'><img src={facebook} alt="" /></a></li>
            <li><a href='https://www.instagram.com/rickandmorty/?hl=es'><img src={instagram} alt="" /></a></li>
        </ul>
        <p>Copyright Year 2022 Maximiliano Coletti </p>
    </footer>
  )
}

export default Footer