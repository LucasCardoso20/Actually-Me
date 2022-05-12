import React, {useState, useEffect} from 'react'
import Nav from '../components/Nav/Nav'
import { client } from '../client'
import { urlFor } from '../client'
import Footer from './Footer'

import '../App.scss'
import './About.scss'


const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]'

    client.fetch(query)
      .then((data)=> {
        console.log(data);
        setAbout(data[0])
      })
  }, [])
  
  

  return (
    <>
      <Nav/>
      <section className='about container'>
        <div className='about__container'>
          <div className="about__image">
              {about.image && (
                <img
                  src={urlFor(about.image).url()}
                  className="singlePost__authorImg"
                  alt=""
                />
              )}
          </div>

          <div className="about__content">
            <h2>About Me</h2>
            <p>{about.text}</p>

          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default About;