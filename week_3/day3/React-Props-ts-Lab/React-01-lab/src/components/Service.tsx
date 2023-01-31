import React from 'react'

interface Services {
    certificate: string,
    price: number,
}

function Service(props:Services) {
  return (
    <div className='title'>
        <h2>The certificate {props.certificate}</h2>
        <p>price: {props.price}</p>
    </div>
  )
}

export default Service