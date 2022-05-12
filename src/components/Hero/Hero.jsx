import React, {useState, useEffect} from 'react'
import './Hero.scss'
import {client} from '../../client'
const Hero = () => {
  const [hero, setHero] = useState([])

  useEffect(() => {
    const query = '*[_type == "hero"]'

    client.fetch(query)
      .then((data)=> {
        setHero(data)
      })
  }, [])
  
  return (
    <main className='hero'>
      <div className='hero__container container'>
        {hero.map((item, index)=> (
          <div key={index}>
          <span>{item.span}</span>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          </ div>
        ))}
        
      </div>

    </main>
  )
}

export default Hero