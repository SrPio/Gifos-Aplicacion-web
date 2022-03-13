import React, { useContext, useEffect, useState } from "react";
import styles from "./Search.module.css";
import { AppContext } from "../../context/context";

function Search({ isDarkMode }) {
  const { search, setSearch } = useContext(AppContext);
  const { inputValue, setInputValue } = useContext(AppContext);

  const { mostrarAC, setMostrarAC } = useContext(AppContext);
  const { sugerencias, setSugerencias } = useContext(AppContext);
  const { loading, setLoading } = useContext(AppContext);

  const { gifSugerido, setGifSugerido } = useContext(AppContext);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSend = (e) => {
    setSearch(inputValue);
  };

  function sugerenciaHandler(e) {
    setGifSugerido(e.target.innerText);
    setInputValue(e.target.innerText);
    handleSend();
  }

  return (
    <div className={`${isDarkMode ? styles.dark : ""} ${styles.search}`}>
      <div className={styles.contBar}>
        <input
          className={`${isDarkMode ? styles.dark : ""} ${styles.barStyle}`}
          type="text"
          value={inputValue}
          placeholder="Busca gifs"
          onChange={handleInput}
        />
        {mostrarAC === true ? (
          <div className={styles.autocompletacion}>
            {sugerencias.map((sugerencia) => {
              return <p onClick={sugerenciaHandler}>{sugerencia.name}</p>;
            })}
          </div>
        ) : null}
        <button
          onClick={handleSend}
          className={`${isDarkMode ? styles.dark : ""} ${styles.btnStyle}`}
        >
          <img src="../../images/icon-search-mod-noc.svg" alt="" />
        </button>
      </div>
      <h2 className={`${isDarkMode ? styles.dark : ""} ${styles.titulo}`}>
        Resultados de la búsqueda
      </h2>
      {loading === true ? (
        <img src="../../images/loading.svg" className={styles.loading}></img>
      ) : null}
      <div id="contImgs"></div>
    </div>
  );
}

export default Search;
