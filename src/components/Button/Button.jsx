import React from 'react';

const Button = (props) => {

  const { clicked } = props;

  return <button onClick={clicked}>Click me for Cat Facts</button>
};

export default Button;
