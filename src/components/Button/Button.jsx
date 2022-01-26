import React from 'react';
import styles from "./Button.module.scss";

const Button = (props) => {

  const { clicked } = props;

  return (
  <div className={styles.buttonContainer}>
    <button  onClick={clicked}>Click me for Cat Facts</button>
  </div>
  )
};

export default Button;
