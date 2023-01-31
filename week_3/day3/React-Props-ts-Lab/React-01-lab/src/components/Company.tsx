import React from 'react'
interface Companies {
    nameOfCompany: string,
    numberOfEmployee: number,
    yearOfCreate: number
}

function Company(props:Companies) {
  return (
    <div className="title">
      <h2>{props.nameOfCompany}</h2>
      <p>Number of employee: {props.numberOfEmployee}</p>
      <h2>{props.yearOfCreate}</h2>
    </div>
  );
}

export default Company