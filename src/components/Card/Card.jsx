import React from 'react';

const Card = (props) => {

  const { getCatList } = props;

  return ( 
  <div> {getCatList}  </div>

  )

};

export default Card;
