import React from 'react'

interface CardPor {
    image: string,
    title: string,
    price: number,
}

function Card(props:CardPor) {
  return (
    <div className="cards">
      <div className="card">
        <img
          src={props.image}
          alt=""
        />
        <h3>{props.title}</h3>
        <p>{props.price}</p>
      </div>
        
    </div>
  );
}

export default Card