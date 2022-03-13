import React from "react";
import styles from "./Header.module.css";

function Header({ isDarkMode, manejoDarkMode }) {
  return (
    <header className={`${isDarkMode ? styles.dark : ""}`}>
      <div className={styles.barraTop}></div>
      <div className={styles.contenedor}>
        <div className={styles.boxLogoBtn}>
          <a href="javascript:location.reload()">
            <img
              className={styles.logo}
              src={`${
                isDarkMode
                  ? "../../images/logo-mobile-modo-noct.svg"
                  : "../../images/logo-desktop.svg"
              }`}
              alt=""
            />
          </a>
          <button
            className={`${isDarkMode ? styles.dark : ""} ${styles.btnStyle}`}
            onClick={manejoDarkMode}
          >
            {isDarkMode ? "MODO LIGHT" : "MODO DARK"}
          </button>
        </div>
        <h1 className={`${isDarkMode ? styles.dark : ""} ${styles.titulo}`}>
          ¡Inspirate y busca los mejores <span>GIFS!</span>
        </h1>
        <img
          src="../../images/ilustra_header.svg"
          alt=""
          className={styles.imgPrincipal}
        />
      </div>
    </header>
  );
}

export default Header;
