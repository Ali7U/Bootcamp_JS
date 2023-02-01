import React from 'react'

interface TV {
  nameOfTV: string;
  img: string;
  dateOfTV: string;
  evaluation: number;
  isAvailable: boolean;
}
let text: string;

function TVShow(props:TV) {
    props.isAvailable ? text : (text = "Coming soon");

  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h2>{props.nameOfTV}</h2>
      <p>{props.dateOfTV}</p>
      <h4>{props.evaluation}</h4>
      <p>{text}</p>
    </div>
  );
}

export default TVShow