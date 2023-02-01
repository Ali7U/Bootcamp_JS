import React from 'react'

interface Movie {
  nameOfMovie: string,
  img: string,
  dateOfMovie: string,
  evaluation: number,
  isAvailable: boolean,
}
let text:string;
function Movies(props:Movie) {
    props.isAvailable ? text : text = "Coming soon"
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h2>{props.nameOfMovie}</h2>
        <p>{props.dateOfMovie}</p>
        <h4>{props.evaluation}</h4>
        <p>{text}</p>
    </div>
  )
}

export default Movies