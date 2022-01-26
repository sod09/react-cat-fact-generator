import React from 'react';
import styles from "./Card.module.scss";

const Card = (props) => {

  const { getCatList, fact } = props;

  return ( 
  <div className={styles.catcard}>
     CAT FACT: {getCatList} 
  </div>

  )

};

export default Card;
