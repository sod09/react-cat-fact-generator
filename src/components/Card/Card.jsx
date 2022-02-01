import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { fact } = props;

  return <div className={styles.catcard}>{fact}</div>;
};

export default Card;
