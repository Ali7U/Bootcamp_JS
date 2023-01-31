import React from 'react'

interface Programers{
    name: string,
    languages: string[],
    yearsOfExperience: number,
    company: string,
}



function Card(props:Programers) {
  return (
    <div className='cards'>
        <div className="title">
            <h2>{props.name}</h2>
            <p className='arr'>{props.languages}</p>
            <h3>{props.yearsOfExperience}</h3>
            <p>{props.company}</p>
        </div>
    </div>
  )
}

export default Card