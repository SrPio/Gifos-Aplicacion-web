import React, { useContext } from "react";
import styles from "./Results.module.css";
import { AppContext } from "../../context/context";
import Card from "../card/Card";

function Results({ isDarkMode }) {
  const { gifData } = useContext(AppContext);

  return (
    <div className={`${isDarkMode ? styles.dark : ""} ${styles.results}`}>
      {gifData.length === 0 ? (
        <div>
          <h1 className={styles.titleNotFound}>No se encontraron resultados</h1>
          <img
            src="../../images/not-found.svg"
            alt="not-found"
            className={styles.imgNotFound}
          />
        </div>
      ) : (
        <main className={styles.gifContenedor}>
          {gifData.map((gif) => {
            return (
              <a title={gif.title} href={gif.url} target="_blank">
                <Card key={gif.id} gif={gif} />
              </a>
            );
          })}
        </main>
      )}

      {console.log(gifData)}
    </div>
  );
}

export default Results;
