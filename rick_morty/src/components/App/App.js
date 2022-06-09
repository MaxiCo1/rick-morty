import { useState, useEffect, useCallback } from "react";
import Hero from "../Hero/Hero";
import "bulma/css/bulma.css";
import styles from "./App.module.css";
import Card from "../Card/Card";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const random = Math.floor(Math.random() * (1 - 826 + 1));

  const getData = useCallback(async (from, to) => {
    try {
      setLoading(true);
      const charactersRange = Array.from(
        { length: to - from + 1 },
        (_, index) => index + 1
      ).join(",");
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${charactersRange}`
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("ERROR EN EL CATCH", error);
    }
  }, []);
 

  useEffect(() => {
    getData(1, 12);
  }, [getData]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles["fondo"]}>
          <Header />
          <Hero />
          <div className={styles["contenedor"]}>
            
            <h1>Character cards</h1>
            <div className="columns is-multiline is-centered">
              {data.map((character) => (
                <Card character={character} />
              ))}
            </div>
            <h2
              onClick={() => {
                getData(1, 24);
              }}
            >
              Ver mas
            </h2>
          </div>
          <Footer />
        </div>
      )}
      
      
    </div>
  );
};

export default App;
