import React from "react";
import styles from "./Card.module.css";

function Card({ gif }) {
  return (
    <div>
      <img className={styles.gifStyle} src={gif.images.original.url} alt="" />
    </div>
  );
}

export default Card;
