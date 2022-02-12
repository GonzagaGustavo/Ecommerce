import React from 'react'
import data from '../data'
import './Home.css'

function Home() {
  return (
      <div className='responsive'>
          {data.products.map((product) => (
              <div className='Home' key={product.id}>
              <img src={product.image} alt="" />
              <p>{product.name}</p>
              <p>{product.price}</p>
          </div>
          ))}
    </div>
  )
}

export default Home