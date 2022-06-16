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
  const [cantToShow, setCantToShow] = useState(6);

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

  //search

  const getSearchData = async (name) => {
    try {
      setCantToShow(6)
      setLoading(true);
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      setData(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log("ERROR EN EL CATCH", error);
    }
  };

  //var cantidad;

  useEffect(() => {
    //if(setSearchData === true)
    getData(1, 30);
  }, [getData]);

  const handleSearch = (name) => {
    getSearchData(name);
  };

  const handleLoadMore = () => {
    setCantToShow(cantToShow + 3);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles["fondo"]}>
          <Header />
          <Hero handleSearch={handleSearch} />
          <div className={styles["contenedor"]}>
            <h1>Character cards</h1>
            <div className="columns is-multiline is-centered">
              {data.map((character, index) => {
                return index < cantToShow ? (
                <Card character={character} />
                ) : null
              })}
            </div>
            {cantToShow < data.length ? <h2 onClick={handleLoadMore}>Ver mas</h2> : <h2>No hay mas</h2>}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
