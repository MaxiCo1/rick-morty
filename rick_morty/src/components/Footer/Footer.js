import React from 'react'
import styles from "./Footer.module.css"
import twitter from "../../assets/twitter.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
        <ul>
            <li><img src={twitter} alt="" /></li>
            <li><img src={facebook} alt="" /></li>
            <li><img src={instagram} alt="" /></li>
        </ul>
        <p>Copyright Year 2022 Maximiliano Coletti </p>
    </footer>
  )
}

export default Footer